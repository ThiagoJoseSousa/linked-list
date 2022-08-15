function listFactory (head=null) {
    let head1=head;
    //value, index
/*function append(value) {let initialTail='nodea';
while (obj[initialTail].next!==null) {initialTail=`${initialTail}+'a'` ;}
let newObj = `${initialTail}+'a'`
this[newObj] = nodeFactory(value);
obj[initialTail].next=this[newObj]; *

} The good logic is storing the object in a variable and looking for .next in the variable*/
function size(){let count=0; let node=head1; // the original head shouldnt be changed to end
     while (node) {node=node.next; count++} return count}
function headReturn() { return head1}
function tail() {let node=head1; while(node.next) {node=node.next} return node}
function append (value){ 
tail().next=nodeFactory(value);

}

function prepend (value) {head1=nodeFactory(value, head1)}
function at (index) {let count=0; let node=head1; while(count<index){node=node.next;count++; }}
function pop(){tail()=null}
function contains(value) {let node=head1; {while(node && node.value()!==value){node=node.next;} if (node && node.value()===value)
{return true} else {return false}}}
function find(value) {let node=head1; let index=0; {while(node && node!==value){node=node.next; index++;} if (node && node.value()===value){return index} else {return null}}}

function toString(){let node=head1; let text='';while(node) {if (node.next) {text +=`(${node.value()})->` ; node=node.next;} else {text +=`(${node.value()})`; node=node.next;}}  console.log(text)}
return {headReturn,tail, size, prepend, append, at, pop, contains, find, toString} 
}



function nodeFactory (data=null,nextNode=null) {
    function value(){
return data;
    }
let next=nextNode;
return {value, next} }
let nodeaaaa = nodeFactory('PATCH')
let nodeaaa = nodeFactory('BOMBA',nodeaaaa)

let nodeaa = nodeFactory('Valeska', nodeaaa)
let nodea = nodeFactory('Alissa',nodeaa)
/*let blabla='nodea'
 console.log(nodea.value())
console.log(nodea.next.value()) 
console.log(obj[blabla].next.value())*/

let mrList= listFactory(nodea) 
console.log(mrList.headReturn().value());
mrList.prepend('METHEFIRST')
console.log(mrList.headReturn().value());
console.log(mrList.contains('NARUTO'))
mrList.toString();