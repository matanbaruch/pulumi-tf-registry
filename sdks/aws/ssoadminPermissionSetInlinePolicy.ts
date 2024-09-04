// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class SsoadminPermissionSetInlinePolicy extends pulumi.CustomResource {
    /**
     * Get an existing SsoadminPermissionSetInlinePolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SsoadminPermissionSetInlinePolicyState, opts?: pulumi.CustomResourceOptions): SsoadminPermissionSetInlinePolicy {
        return new SsoadminPermissionSetInlinePolicy(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:index/ssoadminPermissionSetInlinePolicy:SsoadminPermissionSetInlinePolicy';

    /**
     * Returns true if the given object is an instance of SsoadminPermissionSetInlinePolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SsoadminPermissionSetInlinePolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SsoadminPermissionSetInlinePolicy.__pulumiType;
    }

    public readonly inlinePolicy!: pulumi.Output<string>;
    public readonly instanceArn!: pulumi.Output<string>;
    public readonly permissionSetArn!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.SsoadminPermissionSetInlinePolicyTimeouts | undefined>;

    /**
     * Create a SsoadminPermissionSetInlinePolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SsoadminPermissionSetInlinePolicyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SsoadminPermissionSetInlinePolicyArgs | SsoadminPermissionSetInlinePolicyState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SsoadminPermissionSetInlinePolicyState | undefined;
            resourceInputs["inlinePolicy"] = state ? state.inlinePolicy : undefined;
            resourceInputs["instanceArn"] = state ? state.instanceArn : undefined;
            resourceInputs["permissionSetArn"] = state ? state.permissionSetArn : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as SsoadminPermissionSetInlinePolicyArgs | undefined;
            if ((!args || args.inlinePolicy === undefined) && !opts.urn) {
                throw new Error("Missing required property 'inlinePolicy'");
            }
            if ((!args || args.instanceArn === undefined) && !opts.urn) {
                throw new Error("Missing required property 'instanceArn'");
            }
            if ((!args || args.permissionSetArn === undefined) && !opts.urn) {
                throw new Error("Missing required property 'permissionSetArn'");
            }
            resourceInputs["inlinePolicy"] = args ? args.inlinePolicy : undefined;
            resourceInputs["instanceArn"] = args ? args.instanceArn : undefined;
            resourceInputs["permissionSetArn"] = args ? args.permissionSetArn : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SsoadminPermissionSetInlinePolicy.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SsoadminPermissionSetInlinePolicy resources.
 */
export interface SsoadminPermissionSetInlinePolicyState {
    inlinePolicy?: pulumi.Input<string>;
    instanceArn?: pulumi.Input<string>;
    permissionSetArn?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.SsoadminPermissionSetInlinePolicyTimeouts>;
}

/**
 * The set of arguments for constructing a SsoadminPermissionSetInlinePolicy resource.
 */
export interface SsoadminPermissionSetInlinePolicyArgs {
    inlinePolicy: pulumi.Input<string>;
    instanceArn: pulumi.Input<string>;
    permissionSetArn: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.SsoadminPermissionSetInlinePolicyTimeouts>;
}
