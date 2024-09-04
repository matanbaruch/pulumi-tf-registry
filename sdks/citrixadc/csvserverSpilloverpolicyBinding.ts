// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class CsvserverSpilloverpolicyBinding extends pulumi.CustomResource {
    /**
     * Get an existing CsvserverSpilloverpolicyBinding resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CsvserverSpilloverpolicyBindingState, opts?: pulumi.CustomResourceOptions): CsvserverSpilloverpolicyBinding {
        return new CsvserverSpilloverpolicyBinding(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'citrixadc:index/csvserverSpilloverpolicyBinding:CsvserverSpilloverpolicyBinding';

    /**
     * Returns true if the given object is an instance of CsvserverSpilloverpolicyBinding.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CsvserverSpilloverpolicyBinding {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CsvserverSpilloverpolicyBinding.__pulumiType;
    }

    public readonly bindpoint!: pulumi.Output<string>;
    public readonly gotopriorityexpression!: pulumi.Output<string>;
    public readonly invoke!: pulumi.Output<boolean>;
    public readonly labelname!: pulumi.Output<string>;
    public readonly labeltype!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly policyname!: pulumi.Output<string>;
    public readonly priority!: pulumi.Output<number>;
    public readonly targetlbvserver!: pulumi.Output<string>;

    /**
     * Create a CsvserverSpilloverpolicyBinding resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CsvserverSpilloverpolicyBindingArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CsvserverSpilloverpolicyBindingArgs | CsvserverSpilloverpolicyBindingState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CsvserverSpilloverpolicyBindingState | undefined;
            resourceInputs["bindpoint"] = state ? state.bindpoint : undefined;
            resourceInputs["gotopriorityexpression"] = state ? state.gotopriorityexpression : undefined;
            resourceInputs["invoke"] = state ? state.invoke : undefined;
            resourceInputs["labelname"] = state ? state.labelname : undefined;
            resourceInputs["labeltype"] = state ? state.labeltype : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["policyname"] = state ? state.policyname : undefined;
            resourceInputs["priority"] = state ? state.priority : undefined;
            resourceInputs["targetlbvserver"] = state ? state.targetlbvserver : undefined;
        } else {
            const args = argsOrState as CsvserverSpilloverpolicyBindingArgs | undefined;
            if ((!args || args.policyname === undefined) && !opts.urn) {
                throw new Error("Missing required property 'policyname'");
            }
            resourceInputs["bindpoint"] = args ? args.bindpoint : undefined;
            resourceInputs["gotopriorityexpression"] = args ? args.gotopriorityexpression : undefined;
            resourceInputs["invoke"] = args ? args.invoke : undefined;
            resourceInputs["labelname"] = args ? args.labelname : undefined;
            resourceInputs["labeltype"] = args ? args.labeltype : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["policyname"] = args ? args.policyname : undefined;
            resourceInputs["priority"] = args ? args.priority : undefined;
            resourceInputs["targetlbvserver"] = args ? args.targetlbvserver : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(CsvserverSpilloverpolicyBinding.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering CsvserverSpilloverpolicyBinding resources.
 */
export interface CsvserverSpilloverpolicyBindingState {
    bindpoint?: pulumi.Input<string>;
    gotopriorityexpression?: pulumi.Input<string>;
    invoke?: pulumi.Input<boolean>;
    labelname?: pulumi.Input<string>;
    labeltype?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    policyname?: pulumi.Input<string>;
    priority?: pulumi.Input<number>;
    targetlbvserver?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a CsvserverSpilloverpolicyBinding resource.
 */
export interface CsvserverSpilloverpolicyBindingArgs {
    bindpoint?: pulumi.Input<string>;
    gotopriorityexpression?: pulumi.Input<string>;
    invoke?: pulumi.Input<boolean>;
    labelname?: pulumi.Input<string>;
    labeltype?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    policyname: pulumi.Input<string>;
    priority?: pulumi.Input<number>;
    targetlbvserver?: pulumi.Input<string>;
}
