// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class ServiceVpc extends pulumi.CustomResource {
    /**
     * Get an existing ServiceVpc resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ServiceVpcState, opts?: pulumi.CustomResourceOptions): ServiceVpc {
        return new ServiceVpc(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'valtix:index/serviceVpc:ServiceVpc';

    /**
     * Returns true if the given object is an instance of ServiceVpc.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ServiceVpc {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ServiceVpc.__pulumiType;
    }

    public readonly availabilityZones!: pulumi.Output<string[]>;
    public readonly azureResourceGroup!: pulumi.Output<string | undefined>;
    public readonly cidr!: pulumi.Output<string>;
    public readonly cspAccountName!: pulumi.Output<string>;
    public readonly managementCidr!: pulumi.Output<string | undefined>;
    public /*out*/ readonly managementVpcId!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public /*out*/ readonly natGatewayPublicIps!: pulumi.Output<string[]>;
    public readonly region!: pulumi.Output<string>;
    public /*out*/ readonly serviceVpcId!: pulumi.Output<number>;
    public readonly transitGatewayId!: pulumi.Output<string | undefined>;
    public readonly useNatGateway!: pulumi.Output<boolean | undefined>;
    public /*out*/ readonly vpcId!: pulumi.Output<string>;

    /**
     * Create a ServiceVpc resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ServiceVpcArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ServiceVpcArgs | ServiceVpcState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ServiceVpcState | undefined;
            resourceInputs["availabilityZones"] = state ? state.availabilityZones : undefined;
            resourceInputs["azureResourceGroup"] = state ? state.azureResourceGroup : undefined;
            resourceInputs["cidr"] = state ? state.cidr : undefined;
            resourceInputs["cspAccountName"] = state ? state.cspAccountName : undefined;
            resourceInputs["managementCidr"] = state ? state.managementCidr : undefined;
            resourceInputs["managementVpcId"] = state ? state.managementVpcId : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["natGatewayPublicIps"] = state ? state.natGatewayPublicIps : undefined;
            resourceInputs["region"] = state ? state.region : undefined;
            resourceInputs["serviceVpcId"] = state ? state.serviceVpcId : undefined;
            resourceInputs["transitGatewayId"] = state ? state.transitGatewayId : undefined;
            resourceInputs["useNatGateway"] = state ? state.useNatGateway : undefined;
            resourceInputs["vpcId"] = state ? state.vpcId : undefined;
        } else {
            const args = argsOrState as ServiceVpcArgs | undefined;
            if ((!args || args.availabilityZones === undefined) && !opts.urn) {
                throw new Error("Missing required property 'availabilityZones'");
            }
            if ((!args || args.cidr === undefined) && !opts.urn) {
                throw new Error("Missing required property 'cidr'");
            }
            if ((!args || args.cspAccountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'cspAccountName'");
            }
            if ((!args || args.region === undefined) && !opts.urn) {
                throw new Error("Missing required property 'region'");
            }
            resourceInputs["availabilityZones"] = args ? args.availabilityZones : undefined;
            resourceInputs["azureResourceGroup"] = args ? args.azureResourceGroup : undefined;
            resourceInputs["cidr"] = args ? args.cidr : undefined;
            resourceInputs["cspAccountName"] = args ? args.cspAccountName : undefined;
            resourceInputs["managementCidr"] = args ? args.managementCidr : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["region"] = args ? args.region : undefined;
            resourceInputs["transitGatewayId"] = args ? args.transitGatewayId : undefined;
            resourceInputs["useNatGateway"] = args ? args.useNatGateway : undefined;
            resourceInputs["managementVpcId"] = undefined /*out*/;
            resourceInputs["natGatewayPublicIps"] = undefined /*out*/;
            resourceInputs["serviceVpcId"] = undefined /*out*/;
            resourceInputs["vpcId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ServiceVpc.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ServiceVpc resources.
 */
export interface ServiceVpcState {
    availabilityZones?: pulumi.Input<pulumi.Input<string>[]>;
    azureResourceGroup?: pulumi.Input<string>;
    cidr?: pulumi.Input<string>;
    cspAccountName?: pulumi.Input<string>;
    managementCidr?: pulumi.Input<string>;
    managementVpcId?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    natGatewayPublicIps?: pulumi.Input<pulumi.Input<string>[]>;
    region?: pulumi.Input<string>;
    serviceVpcId?: pulumi.Input<number>;
    transitGatewayId?: pulumi.Input<string>;
    useNatGateway?: pulumi.Input<boolean>;
    vpcId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ServiceVpc resource.
 */
export interface ServiceVpcArgs {
    availabilityZones: pulumi.Input<pulumi.Input<string>[]>;
    azureResourceGroup?: pulumi.Input<string>;
    cidr: pulumi.Input<string>;
    cspAccountName: pulumi.Input<string>;
    managementCidr?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    region: pulumi.Input<string>;
    transitGatewayId?: pulumi.Input<string>;
    useNatGateway?: pulumi.Input<boolean>;
}
