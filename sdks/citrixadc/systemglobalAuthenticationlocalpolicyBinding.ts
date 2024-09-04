// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class SystemglobalAuthenticationlocalpolicyBinding extends pulumi.CustomResource {
    /**
     * Get an existing SystemglobalAuthenticationlocalpolicyBinding resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SystemglobalAuthenticationlocalpolicyBindingState, opts?: pulumi.CustomResourceOptions): SystemglobalAuthenticationlocalpolicyBinding {
        return new SystemglobalAuthenticationlocalpolicyBinding(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'citrixadc:index/systemglobalAuthenticationlocalpolicyBinding:SystemglobalAuthenticationlocalpolicyBinding';

    /**
     * Returns true if the given object is an instance of SystemglobalAuthenticationlocalpolicyBinding.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SystemglobalAuthenticationlocalpolicyBinding {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SystemglobalAuthenticationlocalpolicyBinding.__pulumiType;
    }

    public readonly builtins!: pulumi.Output<string[]>;
    public readonly feature!: pulumi.Output<string>;
    public readonly globalbindtype!: pulumi.Output<string>;
    public readonly gotopriorityexpression!: pulumi.Output<string>;
    public readonly nextfactor!: pulumi.Output<string>;
    public readonly policyname!: pulumi.Output<string>;
    public readonly priority!: pulumi.Output<number>;

    /**
     * Create a SystemglobalAuthenticationlocalpolicyBinding resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SystemglobalAuthenticationlocalpolicyBindingArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SystemglobalAuthenticationlocalpolicyBindingArgs | SystemglobalAuthenticationlocalpolicyBindingState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SystemglobalAuthenticationlocalpolicyBindingState | undefined;
            resourceInputs["builtins"] = state ? state.builtins : undefined;
            resourceInputs["feature"] = state ? state.feature : undefined;
            resourceInputs["globalbindtype"] = state ? state.globalbindtype : undefined;
            resourceInputs["gotopriorityexpression"] = state ? state.gotopriorityexpression : undefined;
            resourceInputs["nextfactor"] = state ? state.nextfactor : undefined;
            resourceInputs["policyname"] = state ? state.policyname : undefined;
            resourceInputs["priority"] = state ? state.priority : undefined;
        } else {
            const args = argsOrState as SystemglobalAuthenticationlocalpolicyBindingArgs | undefined;
            if ((!args || args.policyname === undefined) && !opts.urn) {
                throw new Error("Missing required property 'policyname'");
            }
            if ((!args || args.priority === undefined) && !opts.urn) {
                throw new Error("Missing required property 'priority'");
            }
            resourceInputs["builtins"] = args ? args.builtins : undefined;
            resourceInputs["feature"] = args ? args.feature : undefined;
            resourceInputs["globalbindtype"] = args ? args.globalbindtype : undefined;
            resourceInputs["gotopriorityexpression"] = args ? args.gotopriorityexpression : undefined;
            resourceInputs["nextfactor"] = args ? args.nextfactor : undefined;
            resourceInputs["policyname"] = args ? args.policyname : undefined;
            resourceInputs["priority"] = args ? args.priority : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SystemglobalAuthenticationlocalpolicyBinding.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SystemglobalAuthenticationlocalpolicyBinding resources.
 */
export interface SystemglobalAuthenticationlocalpolicyBindingState {
    builtins?: pulumi.Input<pulumi.Input<string>[]>;
    feature?: pulumi.Input<string>;
    globalbindtype?: pulumi.Input<string>;
    gotopriorityexpression?: pulumi.Input<string>;
    nextfactor?: pulumi.Input<string>;
    policyname?: pulumi.Input<string>;
    priority?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a SystemglobalAuthenticationlocalpolicyBinding resource.
 */
export interface SystemglobalAuthenticationlocalpolicyBindingArgs {
    builtins?: pulumi.Input<pulumi.Input<string>[]>;
    feature?: pulumi.Input<string>;
    globalbindtype?: pulumi.Input<string>;
    gotopriorityexpression?: pulumi.Input<string>;
    nextfactor?: pulumi.Input<string>;
    policyname: pulumi.Input<string>;
    priority: pulumi.Input<number>;
}
