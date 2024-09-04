// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class FusionAppsFusionEnvironmentServiceAttachment extends pulumi.CustomResource {
    /**
     * Get an existing FusionAppsFusionEnvironmentServiceAttachment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: FusionAppsFusionEnvironmentServiceAttachmentState, opts?: pulumi.CustomResourceOptions): FusionAppsFusionEnvironmentServiceAttachment {
        return new FusionAppsFusionEnvironmentServiceAttachment(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'oci:index/fusionAppsFusionEnvironmentServiceAttachment:FusionAppsFusionEnvironmentServiceAttachment';

    /**
     * Returns true if the given object is an instance of FusionAppsFusionEnvironmentServiceAttachment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is FusionAppsFusionEnvironmentServiceAttachment {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === FusionAppsFusionEnvironmentServiceAttachment.__pulumiType;
    }

    public /*out*/ readonly compartmentId!: pulumi.Output<string>;
    public readonly definedTags!: pulumi.Output<{[key: string]: string}>;
    public /*out*/ readonly displayName!: pulumi.Output<string>;
    public /*out*/ readonly freeformTags!: pulumi.Output<{[key: string]: string}>;
    public readonly fusionEnvironmentId!: pulumi.Output<string>;
    public /*out*/ readonly isSkuBased!: pulumi.Output<boolean>;
    public readonly serviceInstanceId!: pulumi.Output<string>;
    public readonly serviceInstanceType!: pulumi.Output<string>;
    public /*out*/ readonly serviceUrl!: pulumi.Output<string>;
    public /*out*/ readonly state!: pulumi.Output<string>;
    public /*out*/ readonly timeCreated!: pulumi.Output<string>;
    public /*out*/ readonly timeUpdated!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.FusionAppsFusionEnvironmentServiceAttachmentTimeouts | undefined>;

    /**
     * Create a FusionAppsFusionEnvironmentServiceAttachment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FusionAppsFusionEnvironmentServiceAttachmentArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: FusionAppsFusionEnvironmentServiceAttachmentArgs | FusionAppsFusionEnvironmentServiceAttachmentState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as FusionAppsFusionEnvironmentServiceAttachmentState | undefined;
            resourceInputs["compartmentId"] = state ? state.compartmentId : undefined;
            resourceInputs["definedTags"] = state ? state.definedTags : undefined;
            resourceInputs["displayName"] = state ? state.displayName : undefined;
            resourceInputs["freeformTags"] = state ? state.freeformTags : undefined;
            resourceInputs["fusionEnvironmentId"] = state ? state.fusionEnvironmentId : undefined;
            resourceInputs["isSkuBased"] = state ? state.isSkuBased : undefined;
            resourceInputs["serviceInstanceId"] = state ? state.serviceInstanceId : undefined;
            resourceInputs["serviceInstanceType"] = state ? state.serviceInstanceType : undefined;
            resourceInputs["serviceUrl"] = state ? state.serviceUrl : undefined;
            resourceInputs["state"] = state ? state.state : undefined;
            resourceInputs["timeCreated"] = state ? state.timeCreated : undefined;
            resourceInputs["timeUpdated"] = state ? state.timeUpdated : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as FusionAppsFusionEnvironmentServiceAttachmentArgs | undefined;
            if ((!args || args.fusionEnvironmentId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'fusionEnvironmentId'");
            }
            if ((!args || args.serviceInstanceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceInstanceId'");
            }
            if ((!args || args.serviceInstanceType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceInstanceType'");
            }
            resourceInputs["definedTags"] = args ? args.definedTags : undefined;
            resourceInputs["fusionEnvironmentId"] = args ? args.fusionEnvironmentId : undefined;
            resourceInputs["serviceInstanceId"] = args ? args.serviceInstanceId : undefined;
            resourceInputs["serviceInstanceType"] = args ? args.serviceInstanceType : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["compartmentId"] = undefined /*out*/;
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["freeformTags"] = undefined /*out*/;
            resourceInputs["isSkuBased"] = undefined /*out*/;
            resourceInputs["serviceUrl"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["timeCreated"] = undefined /*out*/;
            resourceInputs["timeUpdated"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(FusionAppsFusionEnvironmentServiceAttachment.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering FusionAppsFusionEnvironmentServiceAttachment resources.
 */
export interface FusionAppsFusionEnvironmentServiceAttachmentState {
    compartmentId?: pulumi.Input<string>;
    definedTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    displayName?: pulumi.Input<string>;
    freeformTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    fusionEnvironmentId?: pulumi.Input<string>;
    isSkuBased?: pulumi.Input<boolean>;
    serviceInstanceId?: pulumi.Input<string>;
    serviceInstanceType?: pulumi.Input<string>;
    serviceUrl?: pulumi.Input<string>;
    state?: pulumi.Input<string>;
    timeCreated?: pulumi.Input<string>;
    timeUpdated?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.FusionAppsFusionEnvironmentServiceAttachmentTimeouts>;
}

/**
 * The set of arguments for constructing a FusionAppsFusionEnvironmentServiceAttachment resource.
 */
export interface FusionAppsFusionEnvironmentServiceAttachmentArgs {
    definedTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    fusionEnvironmentId: pulumi.Input<string>;
    serviceInstanceId: pulumi.Input<string>;
    serviceInstanceType: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.FusionAppsFusionEnvironmentServiceAttachmentTimeouts>;
}
