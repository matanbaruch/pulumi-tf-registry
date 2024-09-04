// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class AlbLoadBalancerCommonBandwidthPackageAttachment extends pulumi.CustomResource {
    /**
     * Get an existing AlbLoadBalancerCommonBandwidthPackageAttachment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AlbLoadBalancerCommonBandwidthPackageAttachmentState, opts?: pulumi.CustomResourceOptions): AlbLoadBalancerCommonBandwidthPackageAttachment {
        return new AlbLoadBalancerCommonBandwidthPackageAttachment(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'alicloud:index/albLoadBalancerCommonBandwidthPackageAttachment:AlbLoadBalancerCommonBandwidthPackageAttachment';

    /**
     * Returns true if the given object is an instance of AlbLoadBalancerCommonBandwidthPackageAttachment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AlbLoadBalancerCommonBandwidthPackageAttachment {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AlbLoadBalancerCommonBandwidthPackageAttachment.__pulumiType;
    }

    public readonly bandwidthPackageId!: pulumi.Output<string>;
    public readonly dryRun!: pulumi.Output<boolean | undefined>;
    public readonly loadBalancerId!: pulumi.Output<string>;
    public /*out*/ readonly status!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.AlbLoadBalancerCommonBandwidthPackageAttachmentTimeouts | undefined>;

    /**
     * Create a AlbLoadBalancerCommonBandwidthPackageAttachment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AlbLoadBalancerCommonBandwidthPackageAttachmentArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AlbLoadBalancerCommonBandwidthPackageAttachmentArgs | AlbLoadBalancerCommonBandwidthPackageAttachmentState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as AlbLoadBalancerCommonBandwidthPackageAttachmentState | undefined;
            resourceInputs["bandwidthPackageId"] = state ? state.bandwidthPackageId : undefined;
            resourceInputs["dryRun"] = state ? state.dryRun : undefined;
            resourceInputs["loadBalancerId"] = state ? state.loadBalancerId : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as AlbLoadBalancerCommonBandwidthPackageAttachmentArgs | undefined;
            if ((!args || args.bandwidthPackageId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'bandwidthPackageId'");
            }
            if ((!args || args.loadBalancerId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'loadBalancerId'");
            }
            resourceInputs["bandwidthPackageId"] = args ? args.bandwidthPackageId : undefined;
            resourceInputs["dryRun"] = args ? args.dryRun : undefined;
            resourceInputs["loadBalancerId"] = args ? args.loadBalancerId : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["status"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(AlbLoadBalancerCommonBandwidthPackageAttachment.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering AlbLoadBalancerCommonBandwidthPackageAttachment resources.
 */
export interface AlbLoadBalancerCommonBandwidthPackageAttachmentState {
    bandwidthPackageId?: pulumi.Input<string>;
    dryRun?: pulumi.Input<boolean>;
    loadBalancerId?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.AlbLoadBalancerCommonBandwidthPackageAttachmentTimeouts>;
}

/**
 * The set of arguments for constructing a AlbLoadBalancerCommonBandwidthPackageAttachment resource.
 */
export interface AlbLoadBalancerCommonBandwidthPackageAttachmentArgs {
    bandwidthPackageId: pulumi.Input<string>;
    dryRun?: pulumi.Input<boolean>;
    loadBalancerId: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.AlbLoadBalancerCommonBandwidthPackageAttachmentTimeouts>;
}
