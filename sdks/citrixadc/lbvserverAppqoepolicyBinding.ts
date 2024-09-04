// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class LbvserverAppqoepolicyBinding extends pulumi.CustomResource {
    /**
     * Get an existing LbvserverAppqoepolicyBinding resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: LbvserverAppqoepolicyBindingState, opts?: pulumi.CustomResourceOptions): LbvserverAppqoepolicyBinding {
        return new LbvserverAppqoepolicyBinding(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'citrixadc:index/lbvserverAppqoepolicyBinding:LbvserverAppqoepolicyBinding';

    /**
     * Returns true if the given object is an instance of LbvserverAppqoepolicyBinding.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is LbvserverAppqoepolicyBinding {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === LbvserverAppqoepolicyBinding.__pulumiType;
    }

    public readonly bindpoint!: pulumi.Output<string>;
    public readonly gotopriorityexpression!: pulumi.Output<string>;
    public readonly invoke!: pulumi.Output<boolean>;
    public readonly labelname!: pulumi.Output<string>;
    public readonly labeltype!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly policyname!: pulumi.Output<string>;
    public readonly priority!: pulumi.Output<number>;

    /**
     * Create a LbvserverAppqoepolicyBinding resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LbvserverAppqoepolicyBindingArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: LbvserverAppqoepolicyBindingArgs | LbvserverAppqoepolicyBindingState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as LbvserverAppqoepolicyBindingState | undefined;
            resourceInputs["bindpoint"] = state ? state.bindpoint : undefined;
            resourceInputs["gotopriorityexpression"] = state ? state.gotopriorityexpression : undefined;
            resourceInputs["invoke"] = state ? state.invoke : undefined;
            resourceInputs["labelname"] = state ? state.labelname : undefined;
            resourceInputs["labeltype"] = state ? state.labeltype : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["policyname"] = state ? state.policyname : undefined;
            resourceInputs["priority"] = state ? state.priority : undefined;
        } else {
            const args = argsOrState as LbvserverAppqoepolicyBindingArgs | undefined;
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
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(LbvserverAppqoepolicyBinding.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering LbvserverAppqoepolicyBinding resources.
 */
export interface LbvserverAppqoepolicyBindingState {
    bindpoint?: pulumi.Input<string>;
    gotopriorityexpression?: pulumi.Input<string>;
    invoke?: pulumi.Input<boolean>;
    labelname?: pulumi.Input<string>;
    labeltype?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    policyname?: pulumi.Input<string>;
    priority?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a LbvserverAppqoepolicyBinding resource.
 */
export interface LbvserverAppqoepolicyBindingArgs {
    bindpoint?: pulumi.Input<string>;
    gotopriorityexpression?: pulumi.Input<string>;
    invoke?: pulumi.Input<boolean>;
    labelname?: pulumi.Input<string>;
    labeltype?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    policyname: pulumi.Input<string>;
    priority?: pulumi.Input<number>;
}
