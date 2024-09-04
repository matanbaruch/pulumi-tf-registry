// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class VpnglobalAuthenticationsamlpolicyBinding extends pulumi.CustomResource {
    /**
     * Get an existing VpnglobalAuthenticationsamlpolicyBinding resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VpnglobalAuthenticationsamlpolicyBindingState, opts?: pulumi.CustomResourceOptions): VpnglobalAuthenticationsamlpolicyBinding {
        return new VpnglobalAuthenticationsamlpolicyBinding(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'citrixadc:index/vpnglobalAuthenticationsamlpolicyBinding:VpnglobalAuthenticationsamlpolicyBinding';

    /**
     * Returns true if the given object is an instance of VpnglobalAuthenticationsamlpolicyBinding.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VpnglobalAuthenticationsamlpolicyBinding {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VpnglobalAuthenticationsamlpolicyBinding.__pulumiType;
    }

    public readonly gotopriorityexpression!: pulumi.Output<string>;
    public readonly groupextraction!: pulumi.Output<boolean>;
    public readonly policyname!: pulumi.Output<string>;
    public readonly priority!: pulumi.Output<number>;
    public readonly secondary!: pulumi.Output<boolean>;

    /**
     * Create a VpnglobalAuthenticationsamlpolicyBinding resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VpnglobalAuthenticationsamlpolicyBindingArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: VpnglobalAuthenticationsamlpolicyBindingArgs | VpnglobalAuthenticationsamlpolicyBindingState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as VpnglobalAuthenticationsamlpolicyBindingState | undefined;
            resourceInputs["gotopriorityexpression"] = state ? state.gotopriorityexpression : undefined;
            resourceInputs["groupextraction"] = state ? state.groupextraction : undefined;
            resourceInputs["policyname"] = state ? state.policyname : undefined;
            resourceInputs["priority"] = state ? state.priority : undefined;
            resourceInputs["secondary"] = state ? state.secondary : undefined;
        } else {
            const args = argsOrState as VpnglobalAuthenticationsamlpolicyBindingArgs | undefined;
            if ((!args || args.policyname === undefined) && !opts.urn) {
                throw new Error("Missing required property 'policyname'");
            }
            resourceInputs["gotopriorityexpression"] = args ? args.gotopriorityexpression : undefined;
            resourceInputs["groupextraction"] = args ? args.groupextraction : undefined;
            resourceInputs["policyname"] = args ? args.policyname : undefined;
            resourceInputs["priority"] = args ? args.priority : undefined;
            resourceInputs["secondary"] = args ? args.secondary : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(VpnglobalAuthenticationsamlpolicyBinding.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering VpnglobalAuthenticationsamlpolicyBinding resources.
 */
export interface VpnglobalAuthenticationsamlpolicyBindingState {
    gotopriorityexpression?: pulumi.Input<string>;
    groupextraction?: pulumi.Input<boolean>;
    policyname?: pulumi.Input<string>;
    priority?: pulumi.Input<number>;
    secondary?: pulumi.Input<boolean>;
}

/**
 * The set of arguments for constructing a VpnglobalAuthenticationsamlpolicyBinding resource.
 */
export interface VpnglobalAuthenticationsamlpolicyBindingArgs {
    gotopriorityexpression?: pulumi.Input<string>;
    groupextraction?: pulumi.Input<boolean>;
    policyname: pulumi.Input<string>;
    priority?: pulumi.Input<number>;
    secondary?: pulumi.Input<boolean>;
}
