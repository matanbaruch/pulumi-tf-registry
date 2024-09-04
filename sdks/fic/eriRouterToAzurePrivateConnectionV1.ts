// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class EriRouterToAzurePrivateConnectionV1 extends pulumi.CustomResource {
    /**
     * Get an existing EriRouterToAzurePrivateConnectionV1 resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: EriRouterToAzurePrivateConnectionV1State, opts?: pulumi.CustomResourceOptions): EriRouterToAzurePrivateConnectionV1 {
        return new EriRouterToAzurePrivateConnectionV1(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fic:index/eriRouterToAzurePrivateConnectionV1:EriRouterToAzurePrivateConnectionV1';

    /**
     * Returns true if the given object is an instance of EriRouterToAzurePrivateConnectionV1.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is EriRouterToAzurePrivateConnectionV1 {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === EriRouterToAzurePrivateConnectionV1.__pulumiType;
    }

    public /*out*/ readonly area!: pulumi.Output<string>;
    public readonly bandwidth!: pulumi.Output<string>;
    public readonly destinationInterconnect!: pulumi.Output<string>;
    public readonly destinationQosType!: pulumi.Output<string>;
    public readonly destinationServiceKey!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public /*out*/ readonly operationId!: pulumi.Output<string>;
    public /*out*/ readonly operationStatus!: pulumi.Output<string>;
    public readonly primaryConnectedNetworkAddress!: pulumi.Output<string>;
    public /*out*/ readonly redundant!: pulumi.Output<boolean>;
    public readonly secondaryConnectedNetworkAddress!: pulumi.Output<string>;
    public readonly sourceGroupName!: pulumi.Output<string>;
    public readonly sourceRouteFilterIn!: pulumi.Output<string>;
    public readonly sourceRouteFilterOut!: pulumi.Output<string>;
    public readonly sourceRouterId!: pulumi.Output<string>;
    public /*out*/ readonly tenantId!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.EriRouterToAzurePrivateConnectionV1Timeouts | undefined>;

    /**
     * Create a EriRouterToAzurePrivateConnectionV1 resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: EriRouterToAzurePrivateConnectionV1Args, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: EriRouterToAzurePrivateConnectionV1Args | EriRouterToAzurePrivateConnectionV1State, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as EriRouterToAzurePrivateConnectionV1State | undefined;
            resourceInputs["area"] = state ? state.area : undefined;
            resourceInputs["bandwidth"] = state ? state.bandwidth : undefined;
            resourceInputs["destinationInterconnect"] = state ? state.destinationInterconnect : undefined;
            resourceInputs["destinationQosType"] = state ? state.destinationQosType : undefined;
            resourceInputs["destinationServiceKey"] = state ? state.destinationServiceKey : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["operationId"] = state ? state.operationId : undefined;
            resourceInputs["operationStatus"] = state ? state.operationStatus : undefined;
            resourceInputs["primaryConnectedNetworkAddress"] = state ? state.primaryConnectedNetworkAddress : undefined;
            resourceInputs["redundant"] = state ? state.redundant : undefined;
            resourceInputs["secondaryConnectedNetworkAddress"] = state ? state.secondaryConnectedNetworkAddress : undefined;
            resourceInputs["sourceGroupName"] = state ? state.sourceGroupName : undefined;
            resourceInputs["sourceRouteFilterIn"] = state ? state.sourceRouteFilterIn : undefined;
            resourceInputs["sourceRouteFilterOut"] = state ? state.sourceRouteFilterOut : undefined;
            resourceInputs["sourceRouterId"] = state ? state.sourceRouterId : undefined;
            resourceInputs["tenantId"] = state ? state.tenantId : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as EriRouterToAzurePrivateConnectionV1Args | undefined;
            if ((!args || args.bandwidth === undefined) && !opts.urn) {
                throw new Error("Missing required property 'bandwidth'");
            }
            if ((!args || args.destinationInterconnect === undefined) && !opts.urn) {
                throw new Error("Missing required property 'destinationInterconnect'");
            }
            if ((!args || args.destinationQosType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'destinationQosType'");
            }
            if ((!args || args.destinationServiceKey === undefined) && !opts.urn) {
                throw new Error("Missing required property 'destinationServiceKey'");
            }
            if ((!args || args.primaryConnectedNetworkAddress === undefined) && !opts.urn) {
                throw new Error("Missing required property 'primaryConnectedNetworkAddress'");
            }
            if ((!args || args.secondaryConnectedNetworkAddress === undefined) && !opts.urn) {
                throw new Error("Missing required property 'secondaryConnectedNetworkAddress'");
            }
            if ((!args || args.sourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sourceGroupName'");
            }
            if ((!args || args.sourceRouteFilterIn === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sourceRouteFilterIn'");
            }
            if ((!args || args.sourceRouteFilterOut === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sourceRouteFilterOut'");
            }
            if ((!args || args.sourceRouterId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sourceRouterId'");
            }
            resourceInputs["bandwidth"] = args ? args.bandwidth : undefined;
            resourceInputs["destinationInterconnect"] = args ? args.destinationInterconnect : undefined;
            resourceInputs["destinationQosType"] = args ? args.destinationQosType : undefined;
            resourceInputs["destinationServiceKey"] = args ? args.destinationServiceKey : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["primaryConnectedNetworkAddress"] = args ? args.primaryConnectedNetworkAddress : undefined;
            resourceInputs["secondaryConnectedNetworkAddress"] = args ? args.secondaryConnectedNetworkAddress : undefined;
            resourceInputs["sourceGroupName"] = args ? args.sourceGroupName : undefined;
            resourceInputs["sourceRouteFilterIn"] = args ? args.sourceRouteFilterIn : undefined;
            resourceInputs["sourceRouteFilterOut"] = args ? args.sourceRouteFilterOut : undefined;
            resourceInputs["sourceRouterId"] = args ? args.sourceRouterId : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["area"] = undefined /*out*/;
            resourceInputs["operationId"] = undefined /*out*/;
            resourceInputs["operationStatus"] = undefined /*out*/;
            resourceInputs["redundant"] = undefined /*out*/;
            resourceInputs["tenantId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(EriRouterToAzurePrivateConnectionV1.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering EriRouterToAzurePrivateConnectionV1 resources.
 */
export interface EriRouterToAzurePrivateConnectionV1State {
    area?: pulumi.Input<string>;
    bandwidth?: pulumi.Input<string>;
    destinationInterconnect?: pulumi.Input<string>;
    destinationQosType?: pulumi.Input<string>;
    destinationServiceKey?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    operationId?: pulumi.Input<string>;
    operationStatus?: pulumi.Input<string>;
    primaryConnectedNetworkAddress?: pulumi.Input<string>;
    redundant?: pulumi.Input<boolean>;
    secondaryConnectedNetworkAddress?: pulumi.Input<string>;
    sourceGroupName?: pulumi.Input<string>;
    sourceRouteFilterIn?: pulumi.Input<string>;
    sourceRouteFilterOut?: pulumi.Input<string>;
    sourceRouterId?: pulumi.Input<string>;
    tenantId?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.EriRouterToAzurePrivateConnectionV1Timeouts>;
}

/**
 * The set of arguments for constructing a EriRouterToAzurePrivateConnectionV1 resource.
 */
export interface EriRouterToAzurePrivateConnectionV1Args {
    bandwidth: pulumi.Input<string>;
    destinationInterconnect: pulumi.Input<string>;
    destinationQosType: pulumi.Input<string>;
    destinationServiceKey: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    primaryConnectedNetworkAddress: pulumi.Input<string>;
    secondaryConnectedNetworkAddress: pulumi.Input<string>;
    sourceGroupName: pulumi.Input<string>;
    sourceRouteFilterIn: pulumi.Input<string>;
    sourceRouteFilterOut: pulumi.Input<string>;
    sourceRouterId: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.EriRouterToAzurePrivateConnectionV1Timeouts>;
}
