import{_ as e,o as r,c as o,e as d}from"./app-e7f8d9af.js";const i={},t=d('<h1 id="dropmodifier" tabindex="-1"><a class="header-anchor" href="#dropmodifier" aria-hidden="true">#</a> DropModifier</h1><p><a name="DropModifier"></a></p><h2 id="dropmodifier-⇐-keepmodifier" tabindex="-1"><a class="header-anchor" href="#dropmodifier-⇐-keepmodifier" aria-hidden="true">#</a> DropModifier ⇐ <code>KeepModifier</code></h2><p>A <code>DropModifier</code> will &quot;drop&quot; (Remove from total calculations) dice from a roll.</p><p><strong>Kind</strong>: global class<br><strong>Extends</strong>: <code>KeepModifier</code><br><strong>See</strong>: <a href="KeepModifier">KeepModifier</a> for the opposite of this modifier</p><ul><li><a href="#DropModifier">DropModifier</a> ⇐ <code>KeepModifier</code><ul><li><a href="#new_DropModifier_new">new DropModifier([end], [qty])</a></li><li><a href="#DropModifier+order">.order</a> : <code>number</code></li><li><a href="#DropModifier+name">.name</a> ⇒ <code>string</code></li><li><a href="#DropModifier+notation">.notation</a> ⇒ <code>string</code></li><li><a href="#DropModifier+rangeToDrop">.rangeToDrop(_results)</a> ⇒ <code>Array.&lt;number&gt;</code></li></ul></li></ul><p><a name="new_DropModifier_new"></a></p><h3 id="new-dropmodifier-end-qty" tabindex="-1"><a class="header-anchor" href="#new-dropmodifier-end-qty" aria-hidden="true">#</a> new DropModifier([end], [qty])</h3><p>Create a <code>DropModifier</code> instance.</p><p><strong>Throws</strong>:</p><ul><li><code>RangeError</code> End must be one of &#39;h&#39; or &#39;l&#39;</li><li><code>TypeError</code> qty must be a positive integer</li></ul><table><thead><tr><th>Param</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td>[end]</td><td><code>string</code></td><td><code>&quot;l&quot;</code></td><td>Either `h</td></tr><tr><td>[qty]</td><td><code>number</code></td><td><code>1</code></td><td>The amount of dice to drop</td></tr></tbody></table><p><a name="DropModifier+order"></a></p><h3 id="dropmodifier-order-number" tabindex="-1"><a class="header-anchor" href="#dropmodifier-order-number" aria-hidden="true">#</a> dropModifier.order : <code>number</code></h3><p>The default modifier execution order.</p><p><strong>Kind</strong>: instance property of <a href="#DropModifier"><code>DropModifier</code></a><br><a name="DropModifier+name"></a></p><h3 id="dropmodifier-name-⇒-string" tabindex="-1"><a class="header-anchor" href="#dropmodifier-name-⇒-string" aria-hidden="true">#</a> dropModifier.name ⇒ <code>string</code></h3><p>The name of the modifier.</p><p><strong>Kind</strong>: instance property of <a href="#DropModifier"><code>DropModifier</code></a><br><strong>Returns</strong>: <code>string</code> - &#39;drop-l&#39; or &#39;drop-h&#39;<br><a name="DropModifier+notation"></a></p><h3 id="dropmodifier-notation-⇒-string" tabindex="-1"><a class="header-anchor" href="#dropmodifier-notation-⇒-string" aria-hidden="true">#</a> dropModifier.notation ⇒ <code>string</code></h3><p>The modifier&#39;s notation.</p><p><strong>Kind</strong>: instance property of <a href="#DropModifier"><code>DropModifier</code></a><br><a name="DropModifier+rangeToDrop"></a></p><h3 id="dropmodifier-rangetodrop-results-⇒-array-number" tabindex="-1"><a class="header-anchor" href="#dropmodifier-rangetodrop-results-⇒-array-number" aria-hidden="true">#</a> dropModifier.rangeToDrop(_results) ⇒ <code>Array.&lt;number&gt;</code></h3><p>Determine the start and end (end exclusive) range of rolls to drop.</p><p><strong>Kind</strong>: instance method of <a href="#DropModifier"><code>DropModifier</code></a><br><strong>Returns</strong>: <code>Array.&lt;number&gt;</code> - The min / max range to drop</p><table><thead><tr><th>Param</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>_results</td><td><code>RollResults</code></td><td>The results to drop from</td></tr></tbody></table>',26),a=[t];function n(p,f){return r(),o("div",null,a)}const s=e(i,[["render",n],["__file","DropModifier.html.vue"]]);export{s as default};
