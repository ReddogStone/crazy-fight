const chainTwo = (f1, f2) => (...args) => f1(f2(...args));
const chain = (...funcs) => funcs.length === 0 ? () => {} : funcs.reduceRight(chainTwo);
const all = (...funcs) => (...args) => funcs.map(func => func(...args));

const ballPath = context => {
	context.arc(0, 0, 0.5, 0, 2 * Math.PI);
}

const rectPath = context => {
	context.rect(-0.5, -0.5, 1, 1);
}

const transform = (context, pos, rot, scale) => {
	context.translate(pos.x, pos.y);
	context.rotate(rot);
	context.scale(scale.x, scale.y);
};

const applyStyle = (context, fill, stroke, lineWidth) => {
	if (fill) {
		context.fillStyle = fill;
		context.fill();
	}

	if (stroke) {
		context.strokeStyle = stroke;
		if (lineWidth) {
			context.lineWidth = lineWidth;
		}
		context.stroke();
	}
};

const applyCamera = (context, pos, scale, rot) => {
	context.translate(0.5 * context.canvas.width, 0.5 * context.canvas.height);
	context.scale(context.canvas.height, -context.canvas.height);
	context.scale(scale.x, scale.y);
	context.rotate(-rot);
	context.translate(-pos.x, -pos.y);
};

