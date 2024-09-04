// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class DellLcAttributes extends pulumi.CustomResource {
    /**
     * Get an existing DellLcAttributes resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DellLcAttributesState, opts?: pulumi.CustomResourceOptions): DellLcAttributes {
        return new DellLcAttributes(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'redfish:index/dellLcAttributes:DellLcAttributes';

    /**
     * Returns true if the given object is an instance of DellLcAttributes.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DellLcAttributes {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DellLcAttributes.__pulumiType;
    }

    /**
     * Lifecycle Controller attributes. To check allowed attributes please either use the datasource for dell LC attributes or
     * query /redfish/v1/Managers/iDRAC.Embedded.1/Oem/Dell/DellAttributes/LifecycleController.Embedded.1 To get allowed values
     * for those attributes, check /redfish/v1/Registries/ManagerAttributeRegistry/ManagerAttributeRegistry.v1_0_0.json from a
     * Redfish Instance
     */
    public readonly attributes!: pulumi.Output<{[key: string]: string}>;
    /**
     * List of server BMCs and their respective user credentials
     */
    public readonly redfishServers!: pulumi.Output<outputs.DellLcAttributesRedfishServer[] | undefined>;

    /**
     * Create a DellLcAttributes resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DellLcAttributesArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DellLcAttributesArgs | DellLcAttributesState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DellLcAttributesState | undefined;
            resourceInputs["attributes"] = state ? state.attributes : undefined;
            resourceInputs["redfishServers"] = state ? state.redfishServers : undefined;
        } else {
            const args = argsOrState as DellLcAttributesArgs | undefined;
            if ((!args || args.attributes === undefined) && !opts.urn) {
                throw new Error("Missing required property 'attributes'");
            }
            resourceInputs["attributes"] = args ? args.attributes : undefined;
            resourceInputs["redfishServers"] = args ? args.redfishServers : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DellLcAttributes.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DellLcAttributes resources.
 */
export interface DellLcAttributesState {
    /**
     * Lifecycle Controller attributes. To check allowed attributes please either use the datasource for dell LC attributes or
     * query /redfish/v1/Managers/iDRAC.Embedded.1/Oem/Dell/DellAttributes/LifecycleController.Embedded.1 To get allowed values
     * for those attributes, check /redfish/v1/Registries/ManagerAttributeRegistry/ManagerAttributeRegistry.v1_0_0.json from a
     * Redfish Instance
     */
    attributes?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * List of server BMCs and their respective user credentials
     */
    redfishServers?: pulumi.Input<pulumi.Input<inputs.DellLcAttributesRedfishServer>[]>;
}

/**
 * The set of arguments for constructing a DellLcAttributes resource.
 */
export interface DellLcAttributesArgs {
    /**
     * Lifecycle Controller attributes. To check allowed attributes please either use the datasource for dell LC attributes or
     * query /redfish/v1/Managers/iDRAC.Embedded.1/Oem/Dell/DellAttributes/LifecycleController.Embedded.1 To get allowed values
     * for those attributes, check /redfish/v1/Registries/ManagerAttributeRegistry/ManagerAttributeRegistry.v1_0_0.json from a
     * Redfish Instance
     */
    attributes: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * List of server BMCs and their respective user credentials
     */
    redfishServers?: pulumi.Input<pulumi.Input<inputs.DellLcAttributesRedfishServer>[]>;
}
