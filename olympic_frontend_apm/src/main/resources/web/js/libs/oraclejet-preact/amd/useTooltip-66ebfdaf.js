define(['exports', 'preact/hooks', './useTooltipControlled-6376d338'], (function(t,o,e){"use strict";t.useTooltip=({text:t,position:s="bottom",isDisabled:i=!1,anchor:n={x:"element",y:"element"},offset:l,variant:p="tooltip",testId:r})=>{const[a,d]=o.useState(!1),u=i||!t,c=l||{mainAxis:8,crossAxis:0},{tooltipContent:f,tooltipProps:x}=e.useTooltipControlled({text:t,isOpen:a,position:s,isDisabled:u,offset:c,anchor:n,variant:p,onToggle:({value:t})=>d(t),testId:r});return{tooltipContent:f,tooltipProps:x}}}));
//# sourceMappingURL=useTooltip-66ebfdaf.js.map