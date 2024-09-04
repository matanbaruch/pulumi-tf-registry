// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class ClbSecurityGroupAttachment extends pulumi.CustomResource {
    /**
     * Get an existing ClbSecurityGroupAttachment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ClbSecurityGroupAttachmentState, opts?: pulumi.CustomResourceOptions): ClbSecurityGroupAttachment {
        return new ClbSecurityGroupAttachment(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'tencentcloud:index/clbSecurityGroupAttachment:ClbSecurityGroupAttachment';

    /**
     * Returns true if the given object is an instance of ClbSecurityGroupAttachment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ClbSecurityGroupAttachment {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ClbSecurityGroupAttachment.__pulumiType;
    }

    /**
     * Array of CLB instance IDs. Only support set one security group now.
     */
    public readonly loadBalancerIds!: pulumi.Output<string[]>;
    /**
     * Security group ID, such as esg-12345678.
     */
    public readonly securityGroup!: pulumi.Output<string>;

    /**
     * Create a ClbSecurityGroupAttachment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ClbSecurityGroupAttachmentArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ClbSecurityGroupAttachmentArgs | ClbSecurityGroupAttachmentState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ClbSecurityGroupAttachmentState | undefined;
            resourceInputs["loadBalancerIds"] = state ? state.loadBalancerIds : undefined;
            resourceInputs["securityGroup"] = state ? state.securityGroup : undefined;
        } else {
            const args = argsOrState as ClbSecurityGroupAttachmentArgs | undefined;
            if ((!args || args.loadBalancerIds === undefined) && !opts.urn) {
                throw new Error("Missing required property 'loadBalancerIds'");
            }
            if ((!args || args.securityGroup === undefined) && !opts.urn) {
                throw new Error("Missing required property 'securityGroup'");
            }
            resourceInputs["loadBalancerIds"] = args ? args.loadBalancerIds : undefined;
            resourceInputs["securityGroup"] = args ? args.securityGroup : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ClbSecurityGroupAttachment.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ClbSecurityGroupAttachment resources.
 */
export interface ClbSecurityGroupAttachmentState {
    /**
     * Array of CLB instance IDs. Only support set one security group now.
     */
    loadBalancerIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Security group ID, such as esg-12345678.
     */
    securityGroup?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ClbSecurityGroupAttachment resource.
 */
export interface ClbSecurityGroupAttachmentArgs {
    /**
     * Array of CLB instance IDs. Only support set one security group now.
     */
    loadBalancerIds: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Security group ID, such as esg-12345678.
     */
    securityGroup: pulumi.Input<string>;
}
