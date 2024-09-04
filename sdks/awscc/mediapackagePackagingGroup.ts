// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class MediapackagePackagingGroup extends pulumi.CustomResource {
    /**
     * Get an existing MediapackagePackagingGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: MediapackagePackagingGroupState, opts?: pulumi.CustomResourceOptions): MediapackagePackagingGroup {
        return new MediapackagePackagingGroup(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'awscc:index/mediapackagePackagingGroup:MediapackagePackagingGroup';

    /**
     * Returns true if the given object is an instance of MediapackagePackagingGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MediapackagePackagingGroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MediapackagePackagingGroup.__pulumiType;
    }

    /**
     * The ARN of the PackagingGroup.
     */
    public /*out*/ readonly arn!: pulumi.Output<string>;
    /**
     * CDN Authorization
     */
    public readonly authorization!: pulumi.Output<outputs.MediapackagePackagingGroupAuthorization>;
    /**
     * The fully qualified domain name for Assets in the PackagingGroup.
     */
    public /*out*/ readonly domainName!: pulumi.Output<string>;
    /**
     * The configuration parameters for egress access logging.
     */
    public readonly egressAccessLogs!: pulumi.Output<outputs.MediapackagePackagingGroupEgressAccessLogs>;
    /**
     * The ID of the PackagingGroup.
     */
    public readonly packagingGroupId!: pulumi.Output<string>;
    /**
     * A collection of tags associated with a resource
     */
    public readonly tags!: pulumi.Output<outputs.MediapackagePackagingGroupTag[]>;

    /**
     * Create a MediapackagePackagingGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MediapackagePackagingGroupArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: MediapackagePackagingGroupArgs | MediapackagePackagingGroupState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as MediapackagePackagingGroupState | undefined;
            resourceInputs["arn"] = state ? state.arn : undefined;
            resourceInputs["authorization"] = state ? state.authorization : undefined;
            resourceInputs["domainName"] = state ? state.domainName : undefined;
            resourceInputs["egressAccessLogs"] = state ? state.egressAccessLogs : undefined;
            resourceInputs["packagingGroupId"] = state ? state.packagingGroupId : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as MediapackagePackagingGroupArgs | undefined;
            if ((!args || args.packagingGroupId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'packagingGroupId'");
            }
            resourceInputs["authorization"] = args ? args.authorization : undefined;
            resourceInputs["egressAccessLogs"] = args ? args.egressAccessLogs : undefined;
            resourceInputs["packagingGroupId"] = args ? args.packagingGroupId : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["arn"] = undefined /*out*/;
            resourceInputs["domainName"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(MediapackagePackagingGroup.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering MediapackagePackagingGroup resources.
 */
export interface MediapackagePackagingGroupState {
    /**
     * The ARN of the PackagingGroup.
     */
    arn?: pulumi.Input<string>;
    /**
     * CDN Authorization
     */
    authorization?: pulumi.Input<inputs.MediapackagePackagingGroupAuthorization>;
    /**
     * The fully qualified domain name for Assets in the PackagingGroup.
     */
    domainName?: pulumi.Input<string>;
    /**
     * The configuration parameters for egress access logging.
     */
    egressAccessLogs?: pulumi.Input<inputs.MediapackagePackagingGroupEgressAccessLogs>;
    /**
     * The ID of the PackagingGroup.
     */
    packagingGroupId?: pulumi.Input<string>;
    /**
     * A collection of tags associated with a resource
     */
    tags?: pulumi.Input<pulumi.Input<inputs.MediapackagePackagingGroupTag>[]>;
}

/**
 * The set of arguments for constructing a MediapackagePackagingGroup resource.
 */
export interface MediapackagePackagingGroupArgs {
    /**
     * CDN Authorization
     */
    authorization?: pulumi.Input<inputs.MediapackagePackagingGroupAuthorization>;
    /**
     * The configuration parameters for egress access logging.
     */
    egressAccessLogs?: pulumi.Input<inputs.MediapackagePackagingGroupEgressAccessLogs>;
    /**
     * The ID of the PackagingGroup.
     */
    packagingGroupId: pulumi.Input<string>;
    /**
     * A collection of tags associated with a resource
     */
    tags?: pulumi.Input<pulumi.Input<inputs.MediapackagePackagingGroupTag>[]>;
}
