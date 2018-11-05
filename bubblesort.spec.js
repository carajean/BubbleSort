describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
  it('handles an array of two elements', function(){
    expect( bubbleSort( [2,1]) ).toEqual( [1,2] );
    expect( bubbleSort( [3,4])).toEqual( [3,4] );
    expect( bubbleSort( ['a', 'B'])).toEqual( ['B', 'a'] );
  });
  it('handles an array of multiple elements', function(){
    expect( bubbleSort( [123, 58, 226])).toEqual( [58, 123, 226] );
    expect( bubbleSort( [9, 'apple', 'Zebra'])).toEqual( [9, 'Zebra', 'apple'] );
    expect( bubbleSort( ['a', 'A', 'c', 'B'])).toEqual( ['A', 'B', 'a', 'c'] );
  })

  beforeAll(function () {
    spyOn('bubbleSort', 'swap').and.callThrough();
    
  }
});


