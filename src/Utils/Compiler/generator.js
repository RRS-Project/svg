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
        if(node.tag === 'paper')
        {
            return '<svg x="0"><rect ' + createAttrString(node.attr) + '></rect></svg>';
        }
        else if(node.tag === 'rect')
        {
            return '<svg x="0"><rect ' + createAttrString(node.attr) + '></rect></svg>';
        }
        else if(node.tag === 'circle')
        {
            return '<svg x="0"><circle ' + createAttrString(node.attr) + '></circle></svg>';
        }
        else if(node.tag === 'ellipse')
        {
            return '<svg x="0"><ellipse ' + createAttrString(node.attr) + '></ellipse></svg>';
        }
        return '<svg x="0"><line ' + createAttrString(node.attr) + '></line></svg>';
    }).join('\n\t')
  
    // wrap with open and close svg tag to complete SVG code
    return '<svg '+ svg_attr +'>\n' + elements + '\n</svg>'
  }