// export function generator (svg_ast) {

//     // create attributes string out of attr object
//     // { "width": 100, "height": 100 } becomes 'width="100" height="100"'
//     // function createAttrString (attr) {
//     //   return Object.keys(attr).map(function (key){
//     //     return key + '="' + attr[key] + '"'
//     //   }).join(' ')
//     // }
  
//     // top node is always <svg>. Create attributes string for svg tag
//     // var svg_attr = createAttrString(svg_ast.attr)
  
//     // for each elements in the body of svg_ast, generate svg tag
//     var elements = svg_ast === <></> ? <></> : svg_ast.body.map(function (node) {
//         if(node.tag === 'rect')
//         {
//             return <svg x="0"><rect x="0" y="0" fill={node.attr.fill} height="100" width="100"></rect></svg>
//         }
//         return <svg><line x1={node.attr.x1} y1={node.attr.y1} x2={node.attr.x2} y2={node.attr.y2} style={{stroke: node.attr.stroke}}/></svg>
//     }).join('\n\t')

//     // var elements = {};
  
//     // wrap with open and close svg tag to complete SVG code
//     return(
//         <svg
//             height="100"
//             version="1.1"
//             viewBox="0 0 100 100"
//             width="100"
//             xmlns="http://www.w3.org/2000/svg">
//                 {elements}
//         </svg>
//     );
//   }


export function generator (svg_ast) {

    function createAttrString (attr) {
      return Object.keys(attr).map(function (key){
        return key + '="' + attr[key] + '"'
      }).join(' ')
    }
  
    // top node is always <svg>. Create attributes string for svg tag
    var svg_attr = createAttrString(svg_ast.attr)
  
    // for each elements in the body of svg_ast, generate svg tag
    var elements = svg_ast.body.map(function (node) {
        if(node.tag === 'rect')
        {
            return '<svg x="0"><rect ' + createAttrString(node.attr) + '></rect></svg>';
        }
        return '<svg x="0"><line ' + createAttrString(node.attr) + '></line></svg>';
    }).join('\n\t')
  
    // wrap with open and close svg tag to complete SVG code
    return '<svg '+ svg_attr +'>\n' + elements + '\n</svg>'
  }