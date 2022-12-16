export { };

declare global {
    interface Array<T> {
        findAndReplaceOrPush(predicate: (element: T) => boolean, replacer: T): T[];
        deleteByCondition(predicate: (element: T) => boolean): T[];
    }
}

if (!Array.prototype.findAndReplaceOrPush) {
    Array.prototype.findAndReplaceOrPush = function (predicate, element) {
        const index = this.findIndex(predicate);
        index != -1 ? this.splice(index, 1, element) : this.push(element);
        return this;
    };
}

if (!Array.prototype.deleteByCondition) {
    Array.prototype.deleteByCondition = function (predicate) {
        const index = this.findIndex(predicate);
        this.splice(index, 1);
        return this;
    };
}