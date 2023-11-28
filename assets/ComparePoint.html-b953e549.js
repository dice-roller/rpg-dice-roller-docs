import{_ as e,o,c as t,e as a}from"./app-e7f8d9af.js";const r={},i=a('<h1 id="comparepoint" tabindex="-1"><a class="header-anchor" href="#comparepoint" aria-hidden="true">#</a> ComparePoint</h1><p><a name="ComparePoint"></a></p><h2 id="comparepoint-1" tabindex="-1"><a class="header-anchor" href="#comparepoint-1" aria-hidden="true">#</a> ComparePoint</h2><p>A <code>ComparePoint</code> object compares numbers against each other. For example, <em>is 6 greater than 3</em>, or <em>is 8 equal to 10</em>.</p><p><strong>Kind</strong>: global class</p><ul><li><a href="#ComparePoint">ComparePoint</a><ul><li><a href="#new_ComparePoint_new">new ComparePoint(operator, value)</a></li><li><em>instance</em><ul><li><a href="#ComparePoint+operator">.operator</a></li><li><a href="#ComparePoint+operator">.operator</a> ⇒ <code>string</code></li><li><a href="#ComparePoint+value">.value</a></li><li><a href="#ComparePoint+value">.value</a> ⇒ <code>number</code></li><li><a href="#ComparePoint+isMatch">.isMatch(value)</a> ⇒ <code>boolean</code></li><li><a href="#ComparePoint+toJSON">.toJSON()</a> ⇒ <code>Object</code></li><li><a href="#ComparePoint+toString">.toString()</a> ⇒ <code>string</code></li></ul></li><li><em>static</em><ul><li><a href="#ComparePoint.isValidOperator">.isValidOperator(operator)</a> ⇒ <code>boolean</code></li></ul></li></ul></li></ul><p><a name="new_ComparePoint_new"></a></p><h3 id="new-comparepoint-operator-value" tabindex="-1"><a class="header-anchor" href="#new-comparepoint-operator-value" aria-hidden="true">#</a> new ComparePoint(operator, value)</h3><p>Create a <code>ComparePoint</code> instance.</p><p><strong>Throws</strong>:</p><ul><li><code>CompareOperatorError</code> operator is invalid</li><li><code>RequiredArgumentError</code> operator and value are required</li><li><code>TypeError</code> value must be numeric</li></ul><table><thead><tr><th>Param</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>operator</td><td><code>string</code></td><td>The comparison operator (One of <code>=</code>, <code>!=</code>, <code>&lt;&gt;</code>, <code>&lt;</code>, <code>&gt;</code>, <code>&lt;=</code>, <code>&gt;=</code>)</td></tr><tr><td>value</td><td><code>number</code></td><td>The value to compare to</td></tr></tbody></table><p><a name="ComparePoint+operator"></a></p><h3 id="comparepoint-operator" tabindex="-1"><a class="header-anchor" href="#comparepoint-operator" aria-hidden="true">#</a> comparePoint.operator</h3><p>Set the comparison operator.</p><p><strong>Kind</strong>: instance property of <a href="#ComparePoint"><code>ComparePoint</code></a><br><strong>Throws</strong>:</p><ul><li>CompareOperatorError operator is invalid</li></ul><table><thead><tr><th>Param</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>operator</td><td><code>string</code></td><td>One of <code>=</code>, <code>!=</code>, <code>&lt;&gt;</code>, <code>&lt;</code>, <code>&gt;</code>, <code>&lt;=</code>, <code>&gt;=</code></td></tr></tbody></table><p><a name="ComparePoint+operator"></a></p><h3 id="comparepoint-operator-⇒-string" tabindex="-1"><a class="header-anchor" href="#comparepoint-operator-⇒-string" aria-hidden="true">#</a> comparePoint.operator ⇒ <code>string</code></h3><p>The comparison operator.</p><p><strong>Kind</strong>: instance property of <a href="#ComparePoint"><code>ComparePoint</code></a><br><a name="ComparePoint+value"></a></p><h3 id="comparepoint-value" tabindex="-1"><a class="header-anchor" href="#comparepoint-value" aria-hidden="true">#</a> comparePoint.value</h3><p>Set the value.</p><p><strong>Kind</strong>: instance property of <a href="#ComparePoint"><code>ComparePoint</code></a><br><strong>Throws</strong>:</p><ul><li><code>TypeError</code> value must be numeric</li></ul><table><thead><tr><th>Param</th><th>Type</th></tr></thead><tbody><tr><td>value</td><td><code>number</code></td></tr></tbody></table><p><a name="ComparePoint+value"></a></p><h3 id="comparepoint-value-⇒-number" tabindex="-1"><a class="header-anchor" href="#comparepoint-value-⇒-number" aria-hidden="true">#</a> comparePoint.value ⇒ <code>number</code></h3><p>The comparison value</p><p><strong>Kind</strong>: instance property of <a href="#ComparePoint"><code>ComparePoint</code></a><br><a name="ComparePoint+isMatch"></a></p><h3 id="comparepoint-ismatch-value-⇒-boolean" tabindex="-1"><a class="header-anchor" href="#comparepoint-ismatch-value-⇒-boolean" aria-hidden="true">#</a> comparePoint.isMatch(value) ⇒ <code>boolean</code></h3><p>Check whether value matches the compare point</p><p><strong>Kind</strong>: instance method of <a href="#ComparePoint"><code>ComparePoint</code></a><br><strong>Returns</strong>: <code>boolean</code> - <code>true</code> if it is a match, <code>false</code> otherwise</p><table><thead><tr><th>Param</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>value</td><td><code>number</code></td><td>The number to compare</td></tr></tbody></table><p><a name="ComparePoint+toJSON"></a></p><h3 id="comparepoint-tojson-⇒-object" tabindex="-1"><a class="header-anchor" href="#comparepoint-tojson-⇒-object" aria-hidden="true">#</a> comparePoint.toJSON() ⇒ <code>Object</code></h3><p>Return an object for JSON serialising.</p><p>This is called automatically when JSON encoding the object.</p><p><strong>Kind</strong>: instance method of <a href="#ComparePoint"><code>ComparePoint</code></a><br><a name="ComparePoint+toString"></a></p><h3 id="comparepoint-tostring-⇒-string" tabindex="-1"><a class="header-anchor" href="#comparepoint-tostring-⇒-string" aria-hidden="true">#</a> comparePoint.toString() ⇒ <code>string</code></h3><p>Return the String representation of the object.</p><p>This is called automatically when casting the object to a string.</p><p><strong>Kind</strong>: instance method of <a href="#ComparePoint"><code>ComparePoint</code></a><br><a name="ComparePoint.isValidOperator"></a></p><h3 id="comparepoint-isvalidoperator-operator-⇒-boolean" tabindex="-1"><a class="header-anchor" href="#comparepoint-isvalidoperator-operator-⇒-boolean" aria-hidden="true">#</a> ComparePoint.isValidOperator(operator) ⇒ <code>boolean</code></h3><p>Check if the operator is valid.</p><p><strong>Kind</strong>: static method of <a href="#ComparePoint"><code>ComparePoint</code></a><br><strong>Returns</strong>: <code>boolean</code> - <code>true</code> if the operator is valid, <code>false</code> otherwise</p><table><thead><tr><th>Param</th><th>Type</th></tr></thead><tbody><tr><td>operator</td><td><code>string</code></td></tr></tbody></table>',48),n=[i];function d(p,c){return o(),t("div",null,n)}const l=e(r,[["render",d],["__file","ComparePoint.html.vue"]]);export{l as default};
