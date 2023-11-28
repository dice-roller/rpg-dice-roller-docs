import{_ as e,o as a,c as r,e as i}from"./app-e7f8d9af.js";const o={},d=i('<h1 id="maxmodifier" tabindex="-1"><a class="header-anchor" href="#maxmodifier" aria-hidden="true">#</a> MaxModifier</h1><p><a name="MaxModifier"></a></p><h2 id="maxmodifier-⇐-modifier" tabindex="-1"><a class="header-anchor" href="#maxmodifier-⇐-modifier" aria-hidden="true">#</a> MaxModifier ⇐ <code>Modifier</code></h2><p>A <code>MaxModifier</code> causes die rolls over a maximum value to be treated as the maximum value.</p><p><strong>Kind</strong>: global class<br><strong>Extends</strong>: <code>Modifier</code><br><strong>See</strong>: <a href="MinModifier">MinModifier</a> for the opposite of this modifier<br><strong>Since</strong>: 4.3.0</p><ul><li><a href="#MaxModifier">MaxModifier</a> ⇐ <code>Modifier</code><ul><li><a href="#new_MaxModifier_new">new MaxModifier(max)</a></li><li><a href="#MaxModifier+order">.order</a> : <code>number</code></li><li><a href="#MaxModifier+max">.max</a> ⇒ <code>Number</code></li><li><a href="#MaxModifier+max">.max</a></li><li><a href="#MaxModifier+name">.name</a> ⇒ <code>string</code></li><li><a href="#MaxModifier+notation">.notation</a> ⇒ <code>string</code></li><li><a href="#MaxModifier+run">.run(results, _context)</a> ⇒ <code>RollResults</code></li><li><a href="#MaxModifier+toJSON">.toJSON()</a> ⇒ <code>Object</code></li></ul></li></ul><p><a name="new_MaxModifier_new"></a></p><h3 id="new-maxmodifier-max" tabindex="-1"><a class="header-anchor" href="#new-maxmodifier-max" aria-hidden="true">#</a> new MaxModifier(max)</h3><p>Create a <code>MaxModifier</code> instance.</p><p><strong>Throws</strong>:</p><ul><li><code>TypeError</code> max must be a number</li></ul><table><thead><tr><th>Param</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>max</td><td><code>number</code></td><td>The maximum value</td></tr></tbody></table><p><a name="MaxModifier+order"></a></p><h3 id="maxmodifier-order-number" tabindex="-1"><a class="header-anchor" href="#maxmodifier-order-number" aria-hidden="true">#</a> maxModifier.order : <code>number</code></h3><p>The default modifier execution order.</p><p><strong>Kind</strong>: instance property of <a href="#MaxModifier"><code>MaxModifier</code></a><br><a name="MaxModifier+max"></a></p><h3 id="maxmodifier-max-⇒-number" tabindex="-1"><a class="header-anchor" href="#maxmodifier-max-⇒-number" aria-hidden="true">#</a> maxModifier.max ⇒ <code>Number</code></h3><p>The maximum value.</p><p><strong>Kind</strong>: instance property of <a href="#MaxModifier"><code>MaxModifier</code></a><br><a name="MaxModifier+max"></a></p><h3 id="maxmodifier-max" tabindex="-1"><a class="header-anchor" href="#maxmodifier-max" aria-hidden="true">#</a> maxModifier.max</h3><p>Set the maximum value.</p><p><strong>Kind</strong>: instance property of <a href="#MaxModifier"><code>MaxModifier</code></a><br><strong>Throws</strong>:</p><ul><li><code>TypeError</code> max must be a number</li></ul><table><thead><tr><th>Param</th><th>Type</th></tr></thead><tbody><tr><td>value</td><td><code>number</code></td></tr></tbody></table><p><a name="MaxModifier+name"></a></p><h3 id="maxmodifier-name-⇒-string" tabindex="-1"><a class="header-anchor" href="#maxmodifier-name-⇒-string" aria-hidden="true">#</a> maxModifier.name ⇒ <code>string</code></h3><p>The name of the modifier.</p><p><strong>Kind</strong>: instance property of <a href="#MaxModifier"><code>MaxModifier</code></a><br><strong>Returns</strong>: <code>string</code> - &#39;max&#39;<br><a name="MaxModifier+notation"></a></p><h3 id="maxmodifier-notation-⇒-string" tabindex="-1"><a class="header-anchor" href="#maxmodifier-notation-⇒-string" aria-hidden="true">#</a> maxModifier.notation ⇒ <code>string</code></h3><p>The modifier&#39;s notation.</p><p><strong>Kind</strong>: instance property of <a href="#MaxModifier"><code>MaxModifier</code></a><br><a name="MaxModifier+run"></a></p><h3 id="maxmodifier-run-results-context-⇒-rollresults" tabindex="-1"><a class="header-anchor" href="#maxmodifier-run-results-context-⇒-rollresults" aria-hidden="true">#</a> maxModifier.run(results, _context) ⇒ <code>RollResults</code></h3><p>Run the modifier on the results.</p><p><strong>Kind</strong>: instance method of <a href="#MaxModifier"><code>MaxModifier</code></a><br><strong>Returns</strong>: <code>RollResults</code> - The modified results</p><table><thead><tr><th>Param</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>results</td><td><code>RollResults</code></td><td>The results to run the modifier against</td></tr><tr><td>_context</td><td><code>StandardDice</code> | <code>RollGroup</code></td><td>The object that the modifier is attached to</td></tr></tbody></table><p><a name="MaxModifier+toJSON"></a></p><h3 id="maxmodifier-tojson-⇒-object" tabindex="-1"><a class="header-anchor" href="#maxmodifier-tojson-⇒-object" aria-hidden="true">#</a> maxModifier.toJSON() ⇒ <code>Object</code></h3><p>Return an object for JSON serialising.</p><p>This is called automatically when JSON encoding the object.</p><p><strong>Kind</strong>: instance method of <a href="#MaxModifier"><code>MaxModifier</code></a></p>',40),t=[d];function n(s,c){return a(),r("div",null,t)}const h=e(o,[["render",n],["__file","MaxModifier.html.vue"]]);export{h as default};
