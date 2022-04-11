import{_ as a,r as p,o as e,c as t,a as n,d as l,F as c,e as o,b as i}from"./app.b38d123f.js";const r={},u=o(`<h1 id="\u6C34\u5E73\u5C45\u4E2D\u3001\u5782\u76F4\u5C45\u4E2D\u548C\u5782\u76F4\u6C34\u5E73\u5C45\u4E2D\u7684\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u6C34\u5E73\u5C45\u4E2D\u3001\u5782\u76F4\u5C45\u4E2D\u548C\u5782\u76F4\u6C34\u5E73\u5C45\u4E2D\u7684\u65B9\u5F0F" aria-hidden="true">#</a> \u6C34\u5E73\u5C45\u4E2D\u3001\u5782\u76F4\u5C45\u4E2D\u548C\u5782\u76F4\u6C34\u5E73\u5C45\u4E2D\u7684\u65B9\u5F0F</h1><p>\u5B9E\u9645\u5DE5\u4F5C\u4E2D\uFF0C\u5C45\u4E2D\u5E03\u5C40\u7684\u573A\u666F\u968F\u5904\u53EF\u89C1\u3002</p><h3 id="_1-\u6C34\u5E73\u5C45\u4E2D" tabindex="-1"><a class="header-anchor" href="#_1-\u6C34\u5E73\u5C45\u4E2D" aria-hidden="true">#</a> 1.\u6C34\u5E73\u5C45\u4E2D</h3><h4 id="\u5B50\u5143\u7D20\u662F\u884C\u5185\u5143\u7D20-inline-inline-block" tabindex="-1"><a class="header-anchor" href="#\u5B50\u5143\u7D20\u662F\u884C\u5185\u5143\u7D20-inline-inline-block" aria-hidden="true">#</a> \u5B50\u5143\u7D20\u662F\u884C\u5185\u5143\u7D20\uFF08inline,inline-block\uFF09</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u7236\u5143\u7D20\u8BBE\u7F6E</span>
text<span class="token operator">-</span>align<span class="token operator">:</span> center<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="\u5BBD\u5EA6\u786E\u5B9A\u7684\u5757\u7EA7\u5143\u7D20" tabindex="-1"><a class="header-anchor" href="#\u5BBD\u5EA6\u786E\u5B9A\u7684\u5757\u7EA7\u5143\u7D20" aria-hidden="true">#</a> \u5BBD\u5EA6\u786E\u5B9A\u7684\u5757\u7EA7\u5143\u7D20</h4><ol><li>margin\uFF1A0 auto</li><li>\u7EDD\u5BF9\u5B9A\u4F4D+\u8D1Fmargin</li></ol><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.mid</span><span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span>50%<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span>200px<span class="token punctuation">;</span>
  <span class="token property">margin-left</span><span class="token punctuation">:</span>-100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ol start="3"><li>\u7EDD\u5BF9\u5B9A\u4F4D + margin: auto</li></ol><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.mid</span><span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span>
  <span class="token property">right</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h4 id="\u5BBD\u5EA6\u672A\u77E5\u7684\u5757\u7EA7\u5143\u7D20" tabindex="-1"><a class="header-anchor" href="#\u5BBD\u5EA6\u672A\u77E5\u7684\u5757\u7EA7\u5143\u7D20" aria-hidden="true">#</a> \u5BBD\u5EA6\u672A\u77E5\u7684\u5757\u7EA7\u5143\u7D20</h4><ol><li>display: table + margin: 0 auto;</li></ol><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.mid</span><span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> table<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ol start="2"><li>\u7EDD\u5BF9\u5B9A\u4F4D + transform</li></ol><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.mid</span><span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span>absolute<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span>50%<span class="token punctuation">;</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>-50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ol start="3"><li>flex\u5E03\u5C40(\u4F5C\u7528\u5728\u7236\u5143\u7D20)</li></ol><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.father</span><span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span>flex<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span>center
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="_2-\u5782\u76F4\u5C45\u4E2D" tabindex="-1"><a class="header-anchor" href="#_2-\u5782\u76F4\u5C45\u4E2D" aria-hidden="true">#</a> 2.\u5782\u76F4\u5C45\u4E2D</h3><h4 id="\u5B50\u5143\u7D20\u7684\u884C\u5185\u5143\u7D20-inline-inline-block" tabindex="-1"><a class="header-anchor" href="#\u5B50\u5143\u7D20\u7684\u884C\u5185\u5143\u7D20-inline-inline-block" aria-hidden="true">#</a> \u5B50\u5143\u7D20\u7684\u884C\u5185\u5143\u7D20\uFF08inline,inline-block\uFF09</h4><ol><li>\u7236\u5143\u7D20\u6709\u786E\u5B9A\u7684\u9AD8\u5EA6\uFF0C\u4F7F\u7528line-height + vertical-align</li></ol><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.father</span><span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">line-height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.son</span><span class="token punctuation">{</span>
  <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u5982\u679C\u5B50\u5143\u7D20\u662Finline\u5143\u7D20\uFF0C\u4E0D\u9700\u8981\u8BBE\u7F6Evertical-align\uFF0C\u56E0\u4E3Ainline\u5143\u7D20\u5728\u884C\u6846\u4E2D\u5782\u76F4\u5C45\u4E2D\u3002\u5982\u679C\u5B50\u5143\u7D20\u662Finline-block\uFF0C\u5C31\u9700\u8981\u8BBE\u7F6Evertical-align: middle\u3002 2. \u4F7F\u7528vertical-align + \u4F2A\u5143\u7D20\uFF0C\u7236\u5143\u7D20\u5BBD\u5EA6\u786E\u4E0D\u786E\u5B9A\u90FD\u53EF\u4EE5\u3002</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.father::after</span><span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.son</span><span class="token punctuation">{</span>
  <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h4 id="_2-\u9AD8\u5EA6\u56FA\u5B9A\u7684\u5757\u7EA7\u5143\u7D20" tabindex="-1"><a class="header-anchor" href="#_2-\u9AD8\u5EA6\u56FA\u5B9A\u7684\u5757\u7EA7\u5143\u7D20" aria-hidden="true">#</a> 2.\u9AD8\u5EA6\u56FA\u5B9A\u7684\u5757\u7EA7\u5143\u7D20</h4><ol><li>\u7EDD\u5BF9\u5B9A\u4F4D + \u8D1Fmargin</li></ol><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.mid</span><span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span>50%<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span>200px<span class="token punctuation">;</span>
  <span class="token property">margin-top</span><span class="token punctuation">:</span>-100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ol start="2"><li>\u7EDD\u5BF9\u5B9A\u4F4D + margin: auto</li></ol><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.mid</span><span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span>
  <span class="token property">bottom</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> auto 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u6CE8\u610F\uFF1A<strong>\u548C\u6C34\u5E73\u5C45\u4E2D\u5BF9\u6BD4\u53EF\u77E5\uFF0C\u5355\u72EC\u8BBE\u7F6Emargin: auto 0 ;\u5E76\u4E0D\u80FD\u4F7F\u7528\u5757\u7EA7\u5143\u7D20\u5782\u76F4\u5C45\u4E2D\u3002</strong></p><h4 id="_3-\u9AD8\u5EA6\u4E0D\u56FA\u5B9A\u7684\u5757\u7EA7\u5143\u7D20" tabindex="-1"><a class="header-anchor" href="#_3-\u9AD8\u5EA6\u4E0D\u56FA\u5B9A\u7684\u5757\u7EA7\u5143\u7D20" aria-hidden="true">#</a> 3.\u9AD8\u5EA6\u4E0D\u56FA\u5B9A\u7684\u5757\u7EA7\u5143\u7D20</h4><ol><li>\u7EDD\u5BF9\u5B9A\u4F4D + transform</li></ol><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.mid</span><span class="token punctuation">{</span>
<span class="token property">position</span><span class="token punctuation">:</span>absolute<span class="token punctuation">;</span>
<span class="token property">top</span><span class="token punctuation">:</span>50%<span class="token punctuation">;</span>
<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ol start="2"><li>flex\u5E03\u5C40\uFF08\u4F5C\u7528\u5728\u7236\u5143\u7D20\uFF09</li></ol><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.father</span><span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span>flex<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="_3-\u5782\u76F4\u6C34\u5E73\u5C45\u4E2D" tabindex="-1"><a class="header-anchor" href="#_3-\u5782\u76F4\u6C34\u5E73\u5C45\u4E2D" aria-hidden="true">#</a> 3.\u5782\u76F4\u6C34\u5E73\u5C45\u4E2D</h3><p>\u6839\u636E\u4E0A\u9762\u5217\u51FA\u7684\u5782\u76F4\u5C45\u4E2D\u548C\u6C34\u5E73\u5C45\u4E2D\uFF0C\u53EF\u4EE5\u7EC4\u5408\u51FA\u4E00\u4E9B\u5782\u76F4\u6C34\u5E73\u5C45\u4E2D\u7684\u65B9\u6CD5</p><h4 id="\u5B50\u5143\u7D20\u662F\u884C\u5185\u5143\u7D20-inline-inline-block-1" tabindex="-1"><a class="header-anchor" href="#\u5B50\u5143\u7D20\u662F\u884C\u5185\u5143\u7D20-inline-inline-block-1" aria-hidden="true">#</a> \u5B50\u5143\u7D20\u662F\u884C\u5185\u5143\u7D20\uFF08inline\uFF0Cinline-block\uFF09</h4><ol><li>\u7236\u5143\u7D20\u6709\u786E\u5B9A\u7684\u9AD8\u5EA6\uFF1Atext-align + vertical + line-height</li></ol><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.father</span><span class="token punctuation">{</span>
<span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
<span class="token property">line-height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
<span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.son</span><span class="token punctuation">{</span>
<span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ol start="2"><li>\u7236\u5143\u7D20\u7684\u9AD8\u5EA6\u4E0D\u786E\u5B9A\uFF1Atext-align + vertical + \u4F2A\u5143\u7D20</li></ol><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.father</span><span class="token punctuation">{</span>
<span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.father::after</span><span class="token punctuation">{</span>
<span class="token property">display</span><span class="token punctuation">:</span>inline-block<span class="token punctuation">;</span>
<span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
<span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
<span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.son</span><span class="token punctuation">{</span>
<span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h4 id="\u5BBD\u9AD8\u786E\u5B9A\u7684\u5757\u7EA7\u5143\u7D20" tabindex="-1"><a class="header-anchor" href="#\u5BBD\u9AD8\u786E\u5B9A\u7684\u5757\u7EA7\u5143\u7D20" aria-hidden="true">#</a> \u5BBD\u9AD8\u786E\u5B9A\u7684\u5757\u7EA7\u5143\u7D20</h4><p>\u53EF\u4EE5\u6839\u636E\u4E0A\u9762\u7684\u65B9\u6CD5\u7EC4\u5408\u800C\u6210\uFF0C\u4E00\u5171\u53EF\u4EE5\u7EC4\u5408\u51FA\u67656\u79CD\u3002\u8FD9\u91CC\u5C31\u8BF4\u4E24\u79CD</p><ol><li>\u7EDD\u5BF9\u5B9A\u4F4D + \u8D1Fmargin</li></ol><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.son</span><span class="token punctuation">{</span>
<span class="token property">width</span><span class="token punctuation">:</span>100px<span class="token punctuation">;</span>
<span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
<span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
<span class="token property">top</span><span class="token punctuation">:</span>50%<span class="token punctuation">;</span>
<span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
<span class="token property">margin-left</span><span class="token punctuation">:</span> -50px<span class="token punctuation">;</span>
<span class="token property">margin-top</span><span class="token punctuation">:</span> -50px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ol start="2"><li>\u7EDD\u5BF9\u5B9A\u4F4D + margin:auto</li></ol><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.son</span><span class="token punctuation">{</span>
<span class="token property">width</span><span class="token punctuation">:</span>100px<span class="token punctuation">;</span>
<span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
<span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
<span class="token property">top</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>
<span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token property">margin</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h4 id="\u5BBD\u9AD8\u90FD\u4E0D\u786E\u5B9A\u7684\u5757\u7EA7\u5143\u7D20" tabindex="-1"><a class="header-anchor" href="#\u5BBD\u9AD8\u90FD\u4E0D\u786E\u5B9A\u7684\u5757\u7EA7\u5143\u7D20" aria-hidden="true">#</a> \u5BBD\u9AD8\u90FD\u4E0D\u786E\u5B9A\u7684\u5757\u7EA7\u5143\u7D20</h4><ol><li>flex\u5E03\u5C40\uFF08\u7236\u5143\u7D20\uFF09</li></ol><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.father</span><span class="token punctuation">{</span>
<span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
<span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token property">justify-content</span><span class="token punctuation">:</span>center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ol start="2"><li>\u7EDD\u5BF9\u5B9A\u4F4D + transform</li></ol><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.son</span><span class="token punctuation">{</span>
<span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
<span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
<span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-50%<span class="token punctuation">,</span>-50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h1 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h1>`,53),b={href:"https://segmentfault.com/a/1190000014116655",target:"_blank",rel:"noopener noreferrer"},k=i("https://segmentfault.com/a/1190000014116655");function d(m,h){const s=p("ExternalLinkIcon");return e(),t(c,null,[u,n("ol",null,[n("li",null,[n("a",b,[k,l(s)])])])],64)}var v=a(r,[["render",d],["__file","question13_verticalHorizontalCenter.html.vue"]]);export{v as default};
