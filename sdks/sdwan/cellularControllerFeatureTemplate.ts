// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class CellularControllerFeatureTemplate extends pulumi.CustomResource {
    /**
     * Get an existing CellularControllerFeatureTemplate resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CellularControllerFeatureTemplateState, opts?: pulumi.CustomResourceOptions): CellularControllerFeatureTemplate {
        return new CellularControllerFeatureTemplate(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'sdwan:index/cellularControllerFeatureTemplate:CellularControllerFeatureTemplate';

    /**
     * Returns true if the given object is an instance of CellularControllerFeatureTemplate.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CellularControllerFeatureTemplate {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CellularControllerFeatureTemplate.__pulumiType;
    }

    /**
     * Cellular interface name
     */
    public readonly cellularInterfaceId!: pulumi.Output<string | undefined>;
    /**
     * Variable name
     */
    public readonly cellularInterfaceIdVariable!: pulumi.Output<string | undefined>;
    /**
     * Data Profile List
     */
    public readonly dataProfiles!: pulumi.Output<outputs.CellularControllerFeatureTemplateDataProfile[] | undefined>;
    /**
     * The description of the feature template
     */
    public readonly description!: pulumi.Output<string>;
    /**
     * List of supported device types - Choices: `vedge-C8000V`, `vedge-C8300-1N1S-4T2X`, `vedge-C8300-1N1S-6T`,
     * `vedge-C8300-2N2S-6T`, `vedge-C8300-2N2S-4T2X`, `vedge-C8500-12X4QC`, `vedge-C8500-12X`, `vedge-C8500-20X6C`,
     * `vedge-C8500L-8S4X`, `vedge-C8200-1N-4T`, `vedge-C8200L-1N-4T`
     */
    public readonly deviceTypes!: pulumi.Output<string[]>;
    /**
     * Enable/Disable Firmware Auto Sim - Default value: `true`
     */
    public readonly firmwareAutoSim!: pulumi.Output<boolean | undefined>;
    /**
     * Variable name
     */
    public readonly firmwareAutoSimVariable!: pulumi.Output<string | undefined>;
    /**
     * The name of the feature template
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Set primary SIM slot - Range: `0`-`255`
     */
    public readonly primarySimSlot!: pulumi.Output<number | undefined>;
    /**
     * Variable name
     */
    public readonly primarySimSlotVariable!: pulumi.Output<string | undefined>;
    /**
     * Set SIM failover retries - Range: `0`-`65535`
     */
    public readonly simFailoverRetries!: pulumi.Output<number | undefined>;
    /**
     * Variable name
     */
    public readonly simFailoverRetriesVariable!: pulumi.Output<string | undefined>;
    /**
     * Set SIM failover timeout in minutes - Range: `3`-`7`
     */
    public readonly simFailoverTimeout!: pulumi.Output<number | undefined>;
    /**
     * Variable name
     */
    public readonly simFailoverTimeoutVariable!: pulumi.Output<string | undefined>;
    /**
     * The template type
     */
    public /*out*/ readonly templateType!: pulumi.Output<string>;
    /**
     * The version of the feature template
     */
    public /*out*/ readonly version!: pulumi.Output<number>;

    /**
     * Create a CellularControllerFeatureTemplate resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CellularControllerFeatureTemplateArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CellularControllerFeatureTemplateArgs | CellularControllerFeatureTemplateState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CellularControllerFeatureTemplateState | undefined;
            resourceInputs["cellularInterfaceId"] = state ? state.cellularInterfaceId : undefined;
            resourceInputs["cellularInterfaceIdVariable"] = state ? state.cellularInterfaceIdVariable : undefined;
            resourceInputs["dataProfiles"] = state ? state.dataProfiles : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["deviceTypes"] = state ? state.deviceTypes : undefined;
            resourceInputs["firmwareAutoSim"] = state ? state.firmwareAutoSim : undefined;
            resourceInputs["firmwareAutoSimVariable"] = state ? state.firmwareAutoSimVariable : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["primarySimSlot"] = state ? state.primarySimSlot : undefined;
            resourceInputs["primarySimSlotVariable"] = state ? state.primarySimSlotVariable : undefined;
            resourceInputs["simFailoverRetries"] = state ? state.simFailoverRetries : undefined;
            resourceInputs["simFailoverRetriesVariable"] = state ? state.simFailoverRetriesVariable : undefined;
            resourceInputs["simFailoverTimeout"] = state ? state.simFailoverTimeout : undefined;
            resourceInputs["simFailoverTimeoutVariable"] = state ? state.simFailoverTimeoutVariable : undefined;
            resourceInputs["templateType"] = state ? state.templateType : undefined;
            resourceInputs["version"] = state ? state.version : undefined;
        } else {
            const args = argsOrState as CellularControllerFeatureTemplateArgs | undefined;
            if ((!args || args.description === undefined) && !opts.urn) {
                throw new Error("Missing required property 'description'");
            }
            if ((!args || args.deviceTypes === undefined) && !opts.urn) {
                throw new Error("Missing required property 'deviceTypes'");
            }
            resourceInputs["cellularInterfaceId"] = args ? args.cellularInterfaceId : undefined;
            resourceInputs["cellularInterfaceIdVariable"] = args ? args.cellularInterfaceIdVariable : undefined;
            resourceInputs["dataProfiles"] = args ? args.dataProfiles : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["deviceTypes"] = args ? args.deviceTypes : undefined;
            resourceInputs["firmwareAutoSim"] = args ? args.firmwareAutoSim : undefined;
            resourceInputs["firmwareAutoSimVariable"] = args ? args.firmwareAutoSimVariable : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["primarySimSlot"] = args ? args.primarySimSlot : undefined;
            resourceInputs["primarySimSlotVariable"] = args ? args.primarySimSlotVariable : undefined;
            resourceInputs["simFailoverRetries"] = args ? args.simFailoverRetries : undefined;
            resourceInputs["simFailoverRetriesVariable"] = args ? args.simFailoverRetriesVariable : undefined;
            resourceInputs["simFailoverTimeout"] = args ? args.simFailoverTimeout : undefined;
            resourceInputs["simFailoverTimeoutVariable"] = args ? args.simFailoverTimeoutVariable : undefined;
            resourceInputs["templateType"] = undefined /*out*/;
            resourceInputs["version"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(CellularControllerFeatureTemplate.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering CellularControllerFeatureTemplate resources.
 */
export interface CellularControllerFeatureTemplateState {
    /**
     * Cellular interface name
     */
    cellularInterfaceId?: pulumi.Input<string>;
    /**
     * Variable name
     */
    cellularInterfaceIdVariable?: pulumi.Input<string>;
    /**
     * Data Profile List
     */
    dataProfiles?: pulumi.Input<pulumi.Input<inputs.CellularControllerFeatureTemplateDataProfile>[]>;
    /**
     * The description of the feature template
     */
    description?: pulumi.Input<string>;
    /**
     * List of supported device types - Choices: `vedge-C8000V`, `vedge-C8300-1N1S-4T2X`, `vedge-C8300-1N1S-6T`,
     * `vedge-C8300-2N2S-6T`, `vedge-C8300-2N2S-4T2X`, `vedge-C8500-12X4QC`, `vedge-C8500-12X`, `vedge-C8500-20X6C`,
     * `vedge-C8500L-8S4X`, `vedge-C8200-1N-4T`, `vedge-C8200L-1N-4T`
     */
    deviceTypes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Enable/Disable Firmware Auto Sim - Default value: `true`
     */
    firmwareAutoSim?: pulumi.Input<boolean>;
    /**
     * Variable name
     */
    firmwareAutoSimVariable?: pulumi.Input<string>;
    /**
     * The name of the feature template
     */
    name?: pulumi.Input<string>;
    /**
     * Set primary SIM slot - Range: `0`-`255`
     */
    primarySimSlot?: pulumi.Input<number>;
    /**
     * Variable name
     */
    primarySimSlotVariable?: pulumi.Input<string>;
    /**
     * Set SIM failover retries - Range: `0`-`65535`
     */
    simFailoverRetries?: pulumi.Input<number>;
    /**
     * Variable name
     */
    simFailoverRetriesVariable?: pulumi.Input<string>;
    /**
     * Set SIM failover timeout in minutes - Range: `3`-`7`
     */
    simFailoverTimeout?: pulumi.Input<number>;
    /**
     * Variable name
     */
    simFailoverTimeoutVariable?: pulumi.Input<string>;
    /**
     * The template type
     */
    templateType?: pulumi.Input<string>;
    /**
     * The version of the feature template
     */
    version?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a CellularControllerFeatureTemplate resource.
 */
export interface CellularControllerFeatureTemplateArgs {
    /**
     * Cellular interface name
     */
    cellularInterfaceId?: pulumi.Input<string>;
    /**
     * Variable name
     */
    cellularInterfaceIdVariable?: pulumi.Input<string>;
    /**
     * Data Profile List
     */
    dataProfiles?: pulumi.Input<pulumi.Input<inputs.CellularControllerFeatureTemplateDataProfile>[]>;
    /**
     * The description of the feature template
     */
    description: pulumi.Input<string>;
    /**
     * List of supported device types - Choices: `vedge-C8000V`, `vedge-C8300-1N1S-4T2X`, `vedge-C8300-1N1S-6T`,
     * `vedge-C8300-2N2S-6T`, `vedge-C8300-2N2S-4T2X`, `vedge-C8500-12X4QC`, `vedge-C8500-12X`, `vedge-C8500-20X6C`,
     * `vedge-C8500L-8S4X`, `vedge-C8200-1N-4T`, `vedge-C8200L-1N-4T`
     */
    deviceTypes: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Enable/Disable Firmware Auto Sim - Default value: `true`
     */
    firmwareAutoSim?: pulumi.Input<boolean>;
    /**
     * Variable name
     */
    firmwareAutoSimVariable?: pulumi.Input<string>;
    /**
     * The name of the feature template
     */
    name?: pulumi.Input<string>;
    /**
     * Set primary SIM slot - Range: `0`-`255`
     */
    primarySimSlot?: pulumi.Input<number>;
    /**
     * Variable name
     */
    primarySimSlotVariable?: pulumi.Input<string>;
    /**
     * Set SIM failover retries - Range: `0`-`65535`
     */
    simFailoverRetries?: pulumi.Input<number>;
    /**
     * Variable name
     */
    simFailoverRetriesVariable?: pulumi.Input<string>;
    /**
     * Set SIM failover timeout in minutes - Range: `3`-`7`
     */
    simFailoverTimeout?: pulumi.Input<number>;
    /**
     * Variable name
     */
    simFailoverTimeoutVariable?: pulumi.Input<string>;
}
