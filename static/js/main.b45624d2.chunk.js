(window.webpackJsonpvideos=window.webpackJsonpvideos||[]).push([[0],{18:function(e,t,a){e.exports=a(44)},24:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(15),c=a.n(r),l=a(8),o=a.n(l),s=a(16),u=a(2),m=a(3),d=a(5),v=a(4),p=a(6),h=(a(24),function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(i)))).state={term:""},a.handleChange=function(e){a.setState({term:e.target.value})},a.onFormSubmit=function(e){e.preventDefault(),a.props.onTermSubmit(a.state.term)},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"ui action input"},i.a.createElement("form",{onSubmit:this.onFormSubmit,className:"ui form"},i.a.createElement("label",{className:"label-space"},"Video Search"),i.a.createElement("div",{className:"field flow"},i.a.createElement("input",{type:"text",onChange:this.handleChange,value:this.state.term}),i.a.createElement("button",{class:"ui button"},"Search"))))}}]),t}(i.a.Component)),f=a(17),b=a.n(f).a.create({baseURL:"https://www.googleapis.com/youtube/v3",params:{part:"snippet",maxResults:5,key:"AIzaSyDU6S94YtSBHNRGBRdDZkxVjDG7werGPug"}}),E=(a(43),function(e){var t=e.video,a=e.onVideoSelect;return i.a.createElement("div",{onClick:function(){return a(t)},className:"video-item item"},i.a.createElement("img",{className:"ui image",src:t.snippet.thumbnails.medium.url,alt:t.snippet.title}),i.a.createElement("div",{className:"content"},i.a.createElement("div",{className:"header"},t.snippet.title," ")))}),S=function(e){var t=e.videos,a=e.onVideoSelect,n=t.map(function(e){return i.a.createElement(E,{onVideoSelect:a,video:e,key:e.id.videoId})});return i.a.createElement("div",{className:"ui relaxed divided list"},n)},w=function(e){var t=e.video;if(!t)return i.a.createElement("div",null,"Loading...");var a="https://www.youtube.com/embed/"+t.id.videoId;return i.a.createElement("div",null,i.a.createElement("div",{className:"ui embed"},i.a.createElement("iframe",{src:a,title:t.snippet.title})),i.a.createElement("h2",null,t.snippet.title),i.a.createElement("h3",null,t.snippet.description),i.a.createElement("h3",null,"Published by: ",t.snippet.channelTitle))},N=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(i)))).state={videos:[],selectedVideo:null},a.onTermSubmit=function(){var e=Object(s.a)(o.a.mark(function e(t){var n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.get("/search",{params:{q:t}});case 2:n=e.sent,a.setState({videos:n.data.items,selectedVideo:n.data.items[0]});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.onVideoSelect=function(e){a.setState({selectedVideo:e})},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.onTermSubmit("News")}},{key:"render",value:function(){return i.a.createElement("div",{className:"ui container"},i.a.createElement(h,{onTermSubmit:this.onTermSubmit}),i.a.createElement("div",{className:"ui grid"},i.a.createElement("div",{className:"ui row"},i.a.createElement("div",{className:"eleven wide column"},i.a.createElement(w,{video:this.state.selectedVideo})),i.a.createElement("div",{className:"five wide column"},i.a.createElement(S,{videos:this.state.videos,onVideoSelect:this.onVideoSelect})))))}}]),t}(i.a.Component);c.a.render(i.a.createElement(N,null),document.querySelector("#root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.b45624d2.chunk.js.map