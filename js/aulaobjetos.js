cadeira={};
cadeira.praia = { encosto: '', assento: '', perna: ''};
cadeira.jantar = { encosto: '', assento: '', perna: ''};
cadeira.escritorio = { encosto: '', assento: '', perna: ''};

cadeira.praia.encosto = 'plástico';
cadeira.praia.assento = 'plástico';
cadeira.praia.perna = '2';
console.log(cadeira.praia);
console.log(cadeira.praia.encosto);
console.log(cadeira['praia']);
console.log(cadeira['praia']['encosto']);
