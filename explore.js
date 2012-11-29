var example = {
	scope: null
};

example.message = function(args)
{
	if(args.log) console.log(args.log);
	if(args.msg) document.getElementById('viewport').innerHTML = args.msg;
};

example.foo = function(args)
{
	this.bar = args.bar;
};

var public = new example.foo({ bar: 'public' });

example.init = function(args)
{
	example.scope = public.bar;
	example.message({ msg:example.scope, log:example.scope });
};

document.addEventListener('DOMContentLoaded',example.init,false);
