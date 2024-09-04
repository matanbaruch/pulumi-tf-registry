// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class IothubDps extends pulumi.CustomResource {
    /**
     * Get an existing IothubDps resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IothubDpsState, opts?: pulumi.CustomResourceOptions): IothubDps {
        return new IothubDps(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azurerm:index/iothubDps:IothubDps';

    /**
     * Returns true if the given object is an instance of IothubDps.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IothubDps {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IothubDps.__pulumiType;
    }

    public readonly allocationPolicy!: pulumi.Output<string | undefined>;
    public readonly dataResidencyEnabled!: pulumi.Output<boolean | undefined>;
    public /*out*/ readonly deviceProvisioningHostName!: pulumi.Output<string>;
    public /*out*/ readonly idScope!: pulumi.Output<string>;
    public readonly ipFilterRules!: pulumi.Output<outputs.IothubDpsIpFilterRule[] | undefined>;
    public readonly linkedHubs!: pulumi.Output<outputs.IothubDpsLinkedHub[] | undefined>;
    public readonly location!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly publicNetworkAccessEnabled!: pulumi.Output<boolean | undefined>;
    public readonly resourceGroupName!: pulumi.Output<string>;
    public /*out*/ readonly serviceOperationsHostName!: pulumi.Output<string>;
    public readonly sku!: pulumi.Output<outputs.IothubDpsSku>;
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.IothubDpsTimeouts | undefined>;

    /**
     * Create a IothubDps resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IothubDpsArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: IothubDpsArgs | IothubDpsState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as IothubDpsState | undefined;
            resourceInputs["allocationPolicy"] = state ? state.allocationPolicy : undefined;
            resourceInputs["dataResidencyEnabled"] = state ? state.dataResidencyEnabled : undefined;
            resourceInputs["deviceProvisioningHostName"] = state ? state.deviceProvisioningHostName : undefined;
            resourceInputs["idScope"] = state ? state.idScope : undefined;
            resourceInputs["ipFilterRules"] = state ? state.ipFilterRules : undefined;
            resourceInputs["linkedHubs"] = state ? state.linkedHubs : undefined;
            resourceInputs["location"] = state ? state.location : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["publicNetworkAccessEnabled"] = state ? state.publicNetworkAccessEnabled : undefined;
            resourceInputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            resourceInputs["serviceOperationsHostName"] = state ? state.serviceOperationsHostName : undefined;
            resourceInputs["sku"] = state ? state.sku : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as IothubDpsArgs | undefined;
            if ((!args || args.location === undefined) && !opts.urn) {
                throw new Error("Missing required property 'location'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.sku === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sku'");
            }
            resourceInputs["allocationPolicy"] = args ? args.allocationPolicy : undefined;
            resourceInputs["dataResidencyEnabled"] = args ? args.dataResidencyEnabled : undefined;
            resourceInputs["ipFilterRules"] = args ? args.ipFilterRules : undefined;
            resourceInputs["linkedHubs"] = args ? args.linkedHubs : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["publicNetworkAccessEnabled"] = args ? args.publicNetworkAccessEnabled : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["deviceProvisioningHostName"] = undefined /*out*/;
            resourceInputs["idScope"] = undefined /*out*/;
            resourceInputs["serviceOperationsHostName"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(IothubDps.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering IothubDps resources.
 */
export interface IothubDpsState {
    allocationPolicy?: pulumi.Input<string>;
    dataResidencyEnabled?: pulumi.Input<boolean>;
    deviceProvisioningHostName?: pulumi.Input<string>;
    idScope?: pulumi.Input<string>;
    ipFilterRules?: pulumi.Input<pulumi.Input<inputs.IothubDpsIpFilterRule>[]>;
    linkedHubs?: pulumi.Input<pulumi.Input<inputs.IothubDpsLinkedHub>[]>;
    location?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    publicNetworkAccessEnabled?: pulumi.Input<boolean>;
    resourceGroupName?: pulumi.Input<string>;
    serviceOperationsHostName?: pulumi.Input<string>;
    sku?: pulumi.Input<inputs.IothubDpsSku>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.IothubDpsTimeouts>;
}

/**
 * The set of arguments for constructing a IothubDps resource.
 */
export interface IothubDpsArgs {
    allocationPolicy?: pulumi.Input<string>;
    dataResidencyEnabled?: pulumi.Input<boolean>;
    ipFilterRules?: pulumi.Input<pulumi.Input<inputs.IothubDpsIpFilterRule>[]>;
    linkedHubs?: pulumi.Input<pulumi.Input<inputs.IothubDpsLinkedHub>[]>;
    location: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    publicNetworkAccessEnabled?: pulumi.Input<boolean>;
    resourceGroupName: pulumi.Input<string>;
    sku: pulumi.Input<inputs.IothubDpsSku>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.IothubDpsTimeouts>;
}
