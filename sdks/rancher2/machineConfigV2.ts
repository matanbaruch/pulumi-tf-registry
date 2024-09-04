// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class MachineConfigV2 extends pulumi.CustomResource {
    /**
     * Get an existing MachineConfigV2 resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: MachineConfigV2State, opts?: pulumi.CustomResourceOptions): MachineConfigV2 {
        return new MachineConfigV2(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'rancher2:index/machineConfigV2:MachineConfigV2';

    /**
     * Returns true if the given object is an instance of MachineConfigV2.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MachineConfigV2 {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MachineConfigV2.__pulumiType;
    }

    public readonly amazonec2Config!: pulumi.Output<outputs.MachineConfigV2Amazonec2Config | undefined>;
    /**
     * Annotations of the resource
     */
    public readonly annotations!: pulumi.Output<{[key: string]: string}>;
    public readonly azureConfig!: pulumi.Output<outputs.MachineConfigV2AzureConfig | undefined>;
    public readonly digitaloceanConfig!: pulumi.Output<outputs.MachineConfigV2DigitaloceanConfig | undefined>;
    public readonly fleetNamespace!: pulumi.Output<string | undefined>;
    /**
     * Cluster V2 generate name. The pattern to generate machine config name. e.g generate_name="prod-pool1" will generate
     * "nc-prod-pool1-?????" names
     */
    public readonly generateName!: pulumi.Output<string>;
    public readonly harvesterConfig!: pulumi.Output<outputs.MachineConfigV2HarvesterConfig | undefined>;
    public /*out*/ readonly kind!: pulumi.Output<string>;
    /**
     * Labels of the resource
     */
    public readonly labels!: pulumi.Output<{[key: string]: string}>;
    public readonly linodeConfig!: pulumi.Output<outputs.MachineConfigV2LinodeConfig | undefined>;
    public /*out*/ readonly name!: pulumi.Output<string>;
    public readonly openstackConfig!: pulumi.Output<outputs.MachineConfigV2OpenstackConfig | undefined>;
    public /*out*/ readonly resourceVersion!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.MachineConfigV2Timeouts | undefined>;
    public readonly vsphereConfig!: pulumi.Output<outputs.MachineConfigV2VsphereConfig | undefined>;

    /**
     * Create a MachineConfigV2 resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MachineConfigV2Args, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: MachineConfigV2Args | MachineConfigV2State, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as MachineConfigV2State | undefined;
            resourceInputs["amazonec2Config"] = state ? state.amazonec2Config : undefined;
            resourceInputs["annotations"] = state ? state.annotations : undefined;
            resourceInputs["azureConfig"] = state ? state.azureConfig : undefined;
            resourceInputs["digitaloceanConfig"] = state ? state.digitaloceanConfig : undefined;
            resourceInputs["fleetNamespace"] = state ? state.fleetNamespace : undefined;
            resourceInputs["generateName"] = state ? state.generateName : undefined;
            resourceInputs["harvesterConfig"] = state ? state.harvesterConfig : undefined;
            resourceInputs["kind"] = state ? state.kind : undefined;
            resourceInputs["labels"] = state ? state.labels : undefined;
            resourceInputs["linodeConfig"] = state ? state.linodeConfig : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["openstackConfig"] = state ? state.openstackConfig : undefined;
            resourceInputs["resourceVersion"] = state ? state.resourceVersion : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["vsphereConfig"] = state ? state.vsphereConfig : undefined;
        } else {
            const args = argsOrState as MachineConfigV2Args | undefined;
            if ((!args || args.generateName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'generateName'");
            }
            resourceInputs["amazonec2Config"] = args ? args.amazonec2Config : undefined;
            resourceInputs["annotations"] = args ? args.annotations : undefined;
            resourceInputs["azureConfig"] = args ? args.azureConfig : undefined;
            resourceInputs["digitaloceanConfig"] = args ? args.digitaloceanConfig : undefined;
            resourceInputs["fleetNamespace"] = args ? args.fleetNamespace : undefined;
            resourceInputs["generateName"] = args ? args.generateName : undefined;
            resourceInputs["harvesterConfig"] = args ? args.harvesterConfig : undefined;
            resourceInputs["labels"] = args ? args.labels : undefined;
            resourceInputs["linodeConfig"] = args ? args.linodeConfig : undefined;
            resourceInputs["openstackConfig"] = args ? args.openstackConfig : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["vsphereConfig"] = args ? args.vsphereConfig : undefined;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["resourceVersion"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(MachineConfigV2.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering MachineConfigV2 resources.
 */
export interface MachineConfigV2State {
    amazonec2Config?: pulumi.Input<inputs.MachineConfigV2Amazonec2Config>;
    /**
     * Annotations of the resource
     */
    annotations?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    azureConfig?: pulumi.Input<inputs.MachineConfigV2AzureConfig>;
    digitaloceanConfig?: pulumi.Input<inputs.MachineConfigV2DigitaloceanConfig>;
    fleetNamespace?: pulumi.Input<string>;
    /**
     * Cluster V2 generate name. The pattern to generate machine config name. e.g generate_name="prod-pool1" will generate
     * "nc-prod-pool1-?????" names
     */
    generateName?: pulumi.Input<string>;
    harvesterConfig?: pulumi.Input<inputs.MachineConfigV2HarvesterConfig>;
    kind?: pulumi.Input<string>;
    /**
     * Labels of the resource
     */
    labels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    linodeConfig?: pulumi.Input<inputs.MachineConfigV2LinodeConfig>;
    name?: pulumi.Input<string>;
    openstackConfig?: pulumi.Input<inputs.MachineConfigV2OpenstackConfig>;
    resourceVersion?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.MachineConfigV2Timeouts>;
    vsphereConfig?: pulumi.Input<inputs.MachineConfigV2VsphereConfig>;
}

/**
 * The set of arguments for constructing a MachineConfigV2 resource.
 */
export interface MachineConfigV2Args {
    amazonec2Config?: pulumi.Input<inputs.MachineConfigV2Amazonec2Config>;
    /**
     * Annotations of the resource
     */
    annotations?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    azureConfig?: pulumi.Input<inputs.MachineConfigV2AzureConfig>;
    digitaloceanConfig?: pulumi.Input<inputs.MachineConfigV2DigitaloceanConfig>;
    fleetNamespace?: pulumi.Input<string>;
    /**
     * Cluster V2 generate name. The pattern to generate machine config name. e.g generate_name="prod-pool1" will generate
     * "nc-prod-pool1-?????" names
     */
    generateName: pulumi.Input<string>;
    harvesterConfig?: pulumi.Input<inputs.MachineConfigV2HarvesterConfig>;
    /**
     * Labels of the resource
     */
    labels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    linodeConfig?: pulumi.Input<inputs.MachineConfigV2LinodeConfig>;
    openstackConfig?: pulumi.Input<inputs.MachineConfigV2OpenstackConfig>;
    timeouts?: pulumi.Input<inputs.MachineConfigV2Timeouts>;
    vsphereConfig?: pulumi.Input<inputs.MachineConfigV2VsphereConfig>;
}
