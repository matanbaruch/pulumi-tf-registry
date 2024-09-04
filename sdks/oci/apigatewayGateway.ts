// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ApigatewayGateway extends pulumi.CustomResource {
    /**
     * Get an existing ApigatewayGateway resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ApigatewayGatewayState, opts?: pulumi.CustomResourceOptions): ApigatewayGateway {
        return new ApigatewayGateway(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'oci:index/apigatewayGateway:ApigatewayGateway';

    /**
     * Returns true if the given object is an instance of ApigatewayGateway.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ApigatewayGateway {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ApigatewayGateway.__pulumiType;
    }

    public readonly caBundles!: pulumi.Output<outputs.ApigatewayGatewayCaBundle[] | undefined>;
    public readonly certificateId!: pulumi.Output<string>;
    public readonly compartmentId!: pulumi.Output<string>;
    public readonly definedTags!: pulumi.Output<{[key: string]: string}>;
    public readonly displayName!: pulumi.Output<string>;
    public readonly endpointType!: pulumi.Output<string>;
    public readonly freeformTags!: pulumi.Output<{[key: string]: string}>;
    public /*out*/ readonly hostname!: pulumi.Output<string>;
    public /*out*/ readonly ipAddresses!: pulumi.Output<outputs.ApigatewayGatewayIpAddress[]>;
    public /*out*/ readonly lifecycleDetails!: pulumi.Output<string>;
    public readonly networkSecurityGroupIds!: pulumi.Output<string[]>;
    public readonly responseCacheDetails!: pulumi.Output<outputs.ApigatewayGatewayResponseCacheDetails | undefined>;
    public /*out*/ readonly state!: pulumi.Output<string>;
    public readonly subnetId!: pulumi.Output<string>;
    public /*out*/ readonly timeCreated!: pulumi.Output<string>;
    public /*out*/ readonly timeUpdated!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.ApigatewayGatewayTimeouts | undefined>;

    /**
     * Create a ApigatewayGateway resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ApigatewayGatewayArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ApigatewayGatewayArgs | ApigatewayGatewayState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ApigatewayGatewayState | undefined;
            resourceInputs["caBundles"] = state ? state.caBundles : undefined;
            resourceInputs["certificateId"] = state ? state.certificateId : undefined;
            resourceInputs["compartmentId"] = state ? state.compartmentId : undefined;
            resourceInputs["definedTags"] = state ? state.definedTags : undefined;
            resourceInputs["displayName"] = state ? state.displayName : undefined;
            resourceInputs["endpointType"] = state ? state.endpointType : undefined;
            resourceInputs["freeformTags"] = state ? state.freeformTags : undefined;
            resourceInputs["hostname"] = state ? state.hostname : undefined;
            resourceInputs["ipAddresses"] = state ? state.ipAddresses : undefined;
            resourceInputs["lifecycleDetails"] = state ? state.lifecycleDetails : undefined;
            resourceInputs["networkSecurityGroupIds"] = state ? state.networkSecurityGroupIds : undefined;
            resourceInputs["responseCacheDetails"] = state ? state.responseCacheDetails : undefined;
            resourceInputs["state"] = state ? state.state : undefined;
            resourceInputs["subnetId"] = state ? state.subnetId : undefined;
            resourceInputs["timeCreated"] = state ? state.timeCreated : undefined;
            resourceInputs["timeUpdated"] = state ? state.timeUpdated : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as ApigatewayGatewayArgs | undefined;
            if ((!args || args.compartmentId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'compartmentId'");
            }
            if ((!args || args.endpointType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'endpointType'");
            }
            if ((!args || args.subnetId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'subnetId'");
            }
            resourceInputs["caBundles"] = args ? args.caBundles : undefined;
            resourceInputs["certificateId"] = args ? args.certificateId : undefined;
            resourceInputs["compartmentId"] = args ? args.compartmentId : undefined;
            resourceInputs["definedTags"] = args ? args.definedTags : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["endpointType"] = args ? args.endpointType : undefined;
            resourceInputs["freeformTags"] = args ? args.freeformTags : undefined;
            resourceInputs["networkSecurityGroupIds"] = args ? args.networkSecurityGroupIds : undefined;
            resourceInputs["responseCacheDetails"] = args ? args.responseCacheDetails : undefined;
            resourceInputs["subnetId"] = args ? args.subnetId : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["hostname"] = undefined /*out*/;
            resourceInputs["ipAddresses"] = undefined /*out*/;
            resourceInputs["lifecycleDetails"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["timeCreated"] = undefined /*out*/;
            resourceInputs["timeUpdated"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ApigatewayGateway.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ApigatewayGateway resources.
 */
export interface ApigatewayGatewayState {
    caBundles?: pulumi.Input<pulumi.Input<inputs.ApigatewayGatewayCaBundle>[]>;
    certificateId?: pulumi.Input<string>;
    compartmentId?: pulumi.Input<string>;
    definedTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    displayName?: pulumi.Input<string>;
    endpointType?: pulumi.Input<string>;
    freeformTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    hostname?: pulumi.Input<string>;
    ipAddresses?: pulumi.Input<pulumi.Input<inputs.ApigatewayGatewayIpAddress>[]>;
    lifecycleDetails?: pulumi.Input<string>;
    networkSecurityGroupIds?: pulumi.Input<pulumi.Input<string>[]>;
    responseCacheDetails?: pulumi.Input<inputs.ApigatewayGatewayResponseCacheDetails>;
    state?: pulumi.Input<string>;
    subnetId?: pulumi.Input<string>;
    timeCreated?: pulumi.Input<string>;
    timeUpdated?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.ApigatewayGatewayTimeouts>;
}

/**
 * The set of arguments for constructing a ApigatewayGateway resource.
 */
export interface ApigatewayGatewayArgs {
    caBundles?: pulumi.Input<pulumi.Input<inputs.ApigatewayGatewayCaBundle>[]>;
    certificateId?: pulumi.Input<string>;
    compartmentId: pulumi.Input<string>;
    definedTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    displayName?: pulumi.Input<string>;
    endpointType: pulumi.Input<string>;
    freeformTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    networkSecurityGroupIds?: pulumi.Input<pulumi.Input<string>[]>;
    responseCacheDetails?: pulumi.Input<inputs.ApigatewayGatewayResponseCacheDetails>;
    subnetId: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.ApigatewayGatewayTimeouts>;
}
