define(function() {
    var text = `{{!
 Copyright 2013 Laurent Bovet (laurent.bovet@windmaster.ch)

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
}}
{{#if keyword}}
    <span class="type-keyword">{{keyword}}{{range schema.minItems schema.maxItems 0 "" false false ".."}}</span>
    {{#each schemas}}
        {{#simple this}}
            <span class="signature-type-{{__type}}">
                {{__type}}
            </span>
            <span class="type-keyword">
                {{range minLength maxLength "" "" false false ".."}}{{range minimum maximum "-∞" "∞" exclusiveMinimum exclusiveMaximum ";"}}
            </span>
        {{/simple}}
        <span class="type-keyword">{{enum this}}</span>
        {{#complex this}}
            {{#box this}}
                <span boxid="{{boxId}}" class="box-{{boxId}} signature-type-{{__type}} signature-button signature-type-expandable button">{{__type}}</span>
            {{/box}}
        {{/complex}}
        {{#ref this}}
            {{#box this}}
                <span boxid="{{boxId}}" class="box-{{boxId}} signature-type-ref signature-button signature-type-expandable button">{{__name}}</span>
            {{/box}}
        {{/ref}}
        {{#if pattern}}
            <span class="type-pattern">/{{pattern}}/</span>
        {{/if}}
        {{#if enum}}
            {{#each enum}}
                <span class="type-enum">{{this}}</span>
            {{/each}}
        {{/if}}
        {{#exists default}}
            <span class="type-keyword">default</span>
            <span class="type-default">{{__default}}</span>
        {{/exists}}
    {{/each}}
{{/if}}
{{#unless keyword}}
    {{#each schemas}}
        {{#primitive this}}
           <span class="signature-type-{{__type}}">
               {{__type}}
            </span>
            <span class="type-keyword">
               {{range minLength maxLength "" "" false false ".."}}{{range minimum maximum "-∞" "∞" exclusiveMinimum exclusiveMaximum ";"}}
            </span>
        {{/primitive}}
        <span class="type-keyword">{{enum this}}</span>
        {{#ref this}}
            {{#box this}}
                <span boxid="{{boxId}}" class="box-{{boxId}} signature-type-ref signature-button signature-type-expandable button">{{__name}}</span>
            {{/box}}
        {{/ref}}
        {{#obj this}}
            {{#box this}}
                <span boxid="{{boxId}}" class="box-{{boxId}} signature-type-{{__type}} signature-button signature-type-expandable button">{{__type}}</span>
            {{/box}}
        {{/obj}}
        {{#if pattern}}
            <span class="type-pattern">/{{pattern}}/</span>
        {{/if}}
        {{#if enum}}
            {{#each enum}}
                <span class="type-enum">{{this}}</span>
            {{/each}}
        {{/if}}
        {{#exists default}}
            <span class="type-keyword">default</span>
            <span class="type-default">{{__default}}</span>
        {{/exists}}
    {{/each}}
{{/unless}}
`;
    return text;
});
