// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class CrvserverAppqoepolicyBinding extends pulumi.CustomResource {
    /**
     * Get an existing CrvserverAppqoepolicyBinding resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CrvserverAppqoepolicyBindingState, opts?: pulumi.CustomResourceOptions): CrvserverAppqoepolicyBinding {
        return new CrvserverAppqoepolicyBinding(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'citrixadc:index/crvserverAppqoepolicyBinding:CrvserverAppqoepolicyBinding';

    /**
     * Returns true if the given object is an instance of CrvserverAppqoepolicyBinding.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CrvserverAppqoepolicyBinding {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CrvserverAppqoepolicyBinding.__pulumiType;
    }

    public readonly bindpoint!: pulumi.Output<string>;
    public readonly gotopriorityexpression!: pulumi.Output<string>;
    public readonly invoke!: pulumi.Output<boolean>;
    public readonly labelname!: pulumi.Output<string>;
    public readonly labeltype!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly policyname!: pulumi.Output<string>;
    public readonly priority!: pulumi.Output<number>;
    public readonly targetvserver!: pulumi.Output<string>;

    /**
     * Create a CrvserverAppqoepolicyBinding resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: CrvserverAppqoepolicyBindingArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CrvserverAppqoepolicyBindingArgs | CrvserverAppqoepolicyBindingState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CrvserverAppqoepolicyBindingState | undefined;
            resourceInputs["bindpoint"] = state ? state.bindpoint : undefined;
            resourceInputs["gotopriorityexpression"] = state ? state.gotopriorityexpression : undefined;
            resourceInputs["invoke"] = state ? state.invoke : undefined;
            resourceInputs["labelname"] = state ? state.labelname : undefined;
            resourceInputs["labeltype"] = state ? state.labeltype : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["policyname"] = state ? state.policyname : undefined;
            resourceInputs["priority"] = state ? state.priority : undefined;
            resourceInputs["targetvserver"] = state ? state.targetvserver : undefined;
        } else {
            const args = argsOrState as CrvserverAppqoepolicyBindingArgs | undefined;
            resourceInputs["bindpoint"] = args ? args.bindpoint : undefined;
            resourceInputs["gotopriorityexpression"] = args ? args.gotopriorityexpression : undefined;
            resourceInputs["invoke"] = args ? args.invoke : undefined;
            resourceInputs["labelname"] = args ? args.labelname : undefined;
            resourceInputs["labeltype"] = args ? args.labeltype : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["policyname"] = args ? args.policyname : undefined;
            resourceInputs["priority"] = args ? args.priority : undefined;
            resourceInputs["targetvserver"] = args ? args.targetvserver : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(CrvserverAppqoepolicyBinding.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering CrvserverAppqoepolicyBinding resources.
 */
export interface CrvserverAppqoepolicyBindingState {
    bindpoint?: pulumi.Input<string>;
    gotopriorityexpression?: pulumi.Input<string>;
    invoke?: pulumi.Input<boolean>;
    labelname?: pulumi.Input<string>;
    labeltype?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    policyname?: pulumi.Input<string>;
    priority?: pulumi.Input<number>;
    targetvserver?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a CrvserverAppqoepolicyBinding resource.
 */
export interface CrvserverAppqoepolicyBindingArgs {
    bindpoint?: pulumi.Input<string>;
    gotopriorityexpression?: pulumi.Input<string>;
    invoke?: pulumi.Input<boolean>;
    labelname?: pulumi.Input<string>;
    labeltype?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    policyname?: pulumi.Input<string>;
    priority?: pulumi.Input<number>;
    targetvserver?: pulumi.Input<string>;
}
