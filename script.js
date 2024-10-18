function add(numbers) {
    if (numbers === "") return 0;
    let delimiter = ",";
    if (numbers.startsWith("//")) {
        const parts = numbers.split("\n");
        delimiter = parts[0].slice(2);
        numbers = parts.slice(1).join("\n");
    }
    const regex = new RegExp(`[${delimiter},\\n]`, "g");
    const nums = numbers.split(regex).map(Number);
    const negatives = nums.filter(num => num < 0);
    if (negatives.length > 0) {
        throw new Error("negative numbers not allowed: " + negatives.join(", "));
    }
    return nums.reduce((sum, num) => sum + num, 0);
}