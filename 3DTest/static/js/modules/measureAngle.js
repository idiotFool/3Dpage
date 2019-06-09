define(() => {
    /**
     *
     * @param positions [[lon, lat, height], [lon, lat, height], [lon, lat, height]]
     */
    const measureAngle = function(positions){
        //根据三阶行列式
        const [x0, y0, z0] = positions[0];
        const [x1, y1, z1] = positions[1];
        const [x2, y2, z2] = positions[2];

        const vector1 = [x1-x0, y1-y0, z1-z0];
        const vector2 = [x2-x0, y2-y0, z2-z0];

        const value = vector1[1]*vector2[2] - vector1[2]*vector2[1] + vector1[2]*vector2[0] - vector1[0]*vector2[2] + vector1[0]*vector2[1] - vector1[1]*vector2[0];

        if(value > 0) {
            console.log('逆时针')
        } else if (value < 0) {
            console.log('顺时针')
        } else {
            console.log('共线')
        }

        const vector3 = [x1-x0, y1-y0, z1-z0];
        const vector4 = [x2-x0, y2-y0, z2-z0];

        const cons = (vector3[0]*vector4[0] + vector3[1]*vector4[2] + vector3[2]*vector4[2]) / (Math.sqrt(vector3[0]*vector3[0] + vector3[1]*vector3[1] + vector3[2]*vector3[2]) * Math.sqrt(vector4[0]*vector4[0] + vector4[1]*vector4[1] + vector4[2]*vector4[2]));
        const degree = Math.acos(cons) * 180 /Math.PI;
        console.log(degree)

    };

    return measureAngle;
});