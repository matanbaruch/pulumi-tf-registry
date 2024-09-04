// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class CloudaccountMaas extends pulumi.CustomResource {
    /**
     * Get an existing CloudaccountMaas resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CloudaccountMaasState, opts?: pulumi.CustomResourceOptions): CloudaccountMaas {
        return new CloudaccountMaas(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'spectrocloud:index/cloudaccountMaas:CloudaccountMaas';

    /**
     * Returns true if the given object is an instance of CloudaccountMaas.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CloudaccountMaas {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CloudaccountMaas.__pulumiType;
    }

    public readonly context!: pulumi.Output<string | undefined>;
    /**
     * Endpoint of the MAAS API that is used to connect to the MAAS cloud. I.e. http://maas:5240/MAAS
     */
    public readonly maasApiEndpoint!: pulumi.Output<string>;
    /**
     * API key that is used to connect to the MAAS cloud.
     */
    public readonly maasApiKey!: pulumi.Output<string>;
    /**
     * Name of the MAAS cloud account.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * ID of the private cloud gateway that is used to connect to the MAAS cloud.
     */
    public readonly privateCloudGatewayId!: pulumi.Output<string>;

    /**
     * Create a CloudaccountMaas resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CloudaccountMaasArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CloudaccountMaasArgs | CloudaccountMaasState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CloudaccountMaasState | undefined;
            resourceInputs["context"] = state ? state.context : undefined;
            resourceInputs["maasApiEndpoint"] = state ? state.maasApiEndpoint : undefined;
            resourceInputs["maasApiKey"] = state ? state.maasApiKey : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["privateCloudGatewayId"] = state ? state.privateCloudGatewayId : undefined;
        } else {
            const args = argsOrState as CloudaccountMaasArgs | undefined;
            if ((!args || args.maasApiEndpoint === undefined) && !opts.urn) {
                throw new Error("Missing required property 'maasApiEndpoint'");
            }
            if ((!args || args.maasApiKey === undefined) && !opts.urn) {
                throw new Error("Missing required property 'maasApiKey'");
            }
            if ((!args || args.privateCloudGatewayId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'privateCloudGatewayId'");
            }
            resourceInputs["context"] = args ? args.context : undefined;
            resourceInputs["maasApiEndpoint"] = args ? args.maasApiEndpoint : undefined;
            resourceInputs["maasApiKey"] = args?.maasApiKey ? pulumi.secret(args.maasApiKey) : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["privateCloudGatewayId"] = args ? args.privateCloudGatewayId : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["maasApiKey"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(CloudaccountMaas.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering CloudaccountMaas resources.
 */
export interface CloudaccountMaasState {
    context?: pulumi.Input<string>;
    /**
     * Endpoint of the MAAS API that is used to connect to the MAAS cloud. I.e. http://maas:5240/MAAS
     */
    maasApiEndpoint?: pulumi.Input<string>;
    /**
     * API key that is used to connect to the MAAS cloud.
     */
    maasApiKey?: pulumi.Input<string>;
    /**
     * Name of the MAAS cloud account.
     */
    name?: pulumi.Input<string>;
    /**
     * ID of the private cloud gateway that is used to connect to the MAAS cloud.
     */
    privateCloudGatewayId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a CloudaccountMaas resource.
 */
export interface CloudaccountMaasArgs {
    context?: pulumi.Input<string>;
    /**
     * Endpoint of the MAAS API that is used to connect to the MAAS cloud. I.e. http://maas:5240/MAAS
     */
    maasApiEndpoint: pulumi.Input<string>;
    /**
     * API key that is used to connect to the MAAS cloud.
     */
    maasApiKey: pulumi.Input<string>;
    /**
     * Name of the MAAS cloud account.
     */
    name?: pulumi.Input<string>;
    /**
     * ID of the private cloud gateway that is used to connect to the MAAS cloud.
     */
    privateCloudGatewayId: pulumi.Input<string>;
}
