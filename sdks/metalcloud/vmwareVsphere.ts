// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class VmwareVsphere extends pulumi.CustomResource {
    /**
     * Get an existing VmwareVsphere resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VmwareVsphereState, opts?: pulumi.CustomResourceOptions): VmwareVsphere {
        return new VmwareVsphere(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'metalcloud:index/vmwareVsphere:VmwareVsphere';

    /**
     * Returns true if the given object is an instance of VmwareVsphere.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VmwareVsphere {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VmwareVsphere.__pulumiType;
    }

    public /*out*/ readonly clusterId!: pulumi.Output<number>;
    public readonly clusterLabel!: pulumi.Output<string>;
    public readonly clusterSoftwareVersion!: pulumi.Output<string>;
    public readonly infrastructureId!: pulumi.Output<number>;
    public readonly instanceArrayCustomVariablesMaster!: pulumi.Output<{[key: string]: string}>;
    public readonly instanceArrayCustomVariablesWorker!: pulumi.Output<{[key: string]: string}>;
    public readonly instanceArrayInstanceCountMaster!: pulumi.Output<number | undefined>;
    public readonly instanceArrayInstanceCountWorker!: pulumi.Output<number | undefined>;
    public readonly instanceArrayNetworkProfileMasters!: pulumi.Output<outputs.VmwareVsphereInstanceArrayNetworkProfileMaster[] | undefined>;
    public readonly instanceArrayNetworkProfileWorkers!: pulumi.Output<outputs.VmwareVsphereInstanceArrayNetworkProfileWorker[] | undefined>;
    public readonly instanceArrays!: pulumi.Output<outputs.VmwareVsphereInstanceArray[] | undefined>;
    public readonly instanceCustomVariablesMasters!: pulumi.Output<outputs.VmwareVsphereInstanceCustomVariablesMaster[] | undefined>;
    public readonly instanceCustomVariablesWorkers!: pulumi.Output<outputs.VmwareVsphereInstanceCustomVariablesWorker[] | undefined>;
    public readonly instanceServerTypeMasters!: pulumi.Output<outputs.VmwareVsphereInstanceServerTypeMaster[] | undefined>;
    public readonly instanceServerTypeWorkers!: pulumi.Output<outputs.VmwareVsphereInstanceServerTypeWorker[] | undefined>;
    public readonly interfaceMasters!: pulumi.Output<outputs.VmwareVsphereInterfaceMaster[] | undefined>;
    public readonly interfaceWorkers!: pulumi.Output<outputs.VmwareVsphereInterfaceWorker[] | undefined>;

    /**
     * Create a VmwareVsphere resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VmwareVsphereArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: VmwareVsphereArgs | VmwareVsphereState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as VmwareVsphereState | undefined;
            resourceInputs["clusterId"] = state ? state.clusterId : undefined;
            resourceInputs["clusterLabel"] = state ? state.clusterLabel : undefined;
            resourceInputs["clusterSoftwareVersion"] = state ? state.clusterSoftwareVersion : undefined;
            resourceInputs["infrastructureId"] = state ? state.infrastructureId : undefined;
            resourceInputs["instanceArrayCustomVariablesMaster"] = state ? state.instanceArrayCustomVariablesMaster : undefined;
            resourceInputs["instanceArrayCustomVariablesWorker"] = state ? state.instanceArrayCustomVariablesWorker : undefined;
            resourceInputs["instanceArrayInstanceCountMaster"] = state ? state.instanceArrayInstanceCountMaster : undefined;
            resourceInputs["instanceArrayInstanceCountWorker"] = state ? state.instanceArrayInstanceCountWorker : undefined;
            resourceInputs["instanceArrayNetworkProfileMasters"] = state ? state.instanceArrayNetworkProfileMasters : undefined;
            resourceInputs["instanceArrayNetworkProfileWorkers"] = state ? state.instanceArrayNetworkProfileWorkers : undefined;
            resourceInputs["instanceArrays"] = state ? state.instanceArrays : undefined;
            resourceInputs["instanceCustomVariablesMasters"] = state ? state.instanceCustomVariablesMasters : undefined;
            resourceInputs["instanceCustomVariablesWorkers"] = state ? state.instanceCustomVariablesWorkers : undefined;
            resourceInputs["instanceServerTypeMasters"] = state ? state.instanceServerTypeMasters : undefined;
            resourceInputs["instanceServerTypeWorkers"] = state ? state.instanceServerTypeWorkers : undefined;
            resourceInputs["interfaceMasters"] = state ? state.interfaceMasters : undefined;
            resourceInputs["interfaceWorkers"] = state ? state.interfaceWorkers : undefined;
        } else {
            const args = argsOrState as VmwareVsphereArgs | undefined;
            if ((!args || args.infrastructureId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'infrastructureId'");
            }
            resourceInputs["clusterLabel"] = args ? args.clusterLabel : undefined;
            resourceInputs["clusterSoftwareVersion"] = args ? args.clusterSoftwareVersion : undefined;
            resourceInputs["infrastructureId"] = args ? args.infrastructureId : undefined;
            resourceInputs["instanceArrayCustomVariablesMaster"] = args ? args.instanceArrayCustomVariablesMaster : undefined;
            resourceInputs["instanceArrayCustomVariablesWorker"] = args ? args.instanceArrayCustomVariablesWorker : undefined;
            resourceInputs["instanceArrayInstanceCountMaster"] = args ? args.instanceArrayInstanceCountMaster : undefined;
            resourceInputs["instanceArrayInstanceCountWorker"] = args ? args.instanceArrayInstanceCountWorker : undefined;
            resourceInputs["instanceArrayNetworkProfileMasters"] = args ? args.instanceArrayNetworkProfileMasters : undefined;
            resourceInputs["instanceArrayNetworkProfileWorkers"] = args ? args.instanceArrayNetworkProfileWorkers : undefined;
            resourceInputs["instanceArrays"] = args ? args.instanceArrays : undefined;
            resourceInputs["instanceCustomVariablesMasters"] = args ? args.instanceCustomVariablesMasters : undefined;
            resourceInputs["instanceCustomVariablesWorkers"] = args ? args.instanceCustomVariablesWorkers : undefined;
            resourceInputs["instanceServerTypeMasters"] = args ? args.instanceServerTypeMasters : undefined;
            resourceInputs["instanceServerTypeWorkers"] = args ? args.instanceServerTypeWorkers : undefined;
            resourceInputs["interfaceMasters"] = args ? args.interfaceMasters : undefined;
            resourceInputs["interfaceWorkers"] = args ? args.interfaceWorkers : undefined;
            resourceInputs["clusterId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(VmwareVsphere.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering VmwareVsphere resources.
 */
export interface VmwareVsphereState {
    clusterId?: pulumi.Input<number>;
    clusterLabel?: pulumi.Input<string>;
    clusterSoftwareVersion?: pulumi.Input<string>;
    infrastructureId?: pulumi.Input<number>;
    instanceArrayCustomVariablesMaster?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    instanceArrayCustomVariablesWorker?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    instanceArrayInstanceCountMaster?: pulumi.Input<number>;
    instanceArrayInstanceCountWorker?: pulumi.Input<number>;
    instanceArrayNetworkProfileMasters?: pulumi.Input<pulumi.Input<inputs.VmwareVsphereInstanceArrayNetworkProfileMaster>[]>;
    instanceArrayNetworkProfileWorkers?: pulumi.Input<pulumi.Input<inputs.VmwareVsphereInstanceArrayNetworkProfileWorker>[]>;
    instanceArrays?: pulumi.Input<pulumi.Input<inputs.VmwareVsphereInstanceArray>[]>;
    instanceCustomVariablesMasters?: pulumi.Input<pulumi.Input<inputs.VmwareVsphereInstanceCustomVariablesMaster>[]>;
    instanceCustomVariablesWorkers?: pulumi.Input<pulumi.Input<inputs.VmwareVsphereInstanceCustomVariablesWorker>[]>;
    instanceServerTypeMasters?: pulumi.Input<pulumi.Input<inputs.VmwareVsphereInstanceServerTypeMaster>[]>;
    instanceServerTypeWorkers?: pulumi.Input<pulumi.Input<inputs.VmwareVsphereInstanceServerTypeWorker>[]>;
    interfaceMasters?: pulumi.Input<pulumi.Input<inputs.VmwareVsphereInterfaceMaster>[]>;
    interfaceWorkers?: pulumi.Input<pulumi.Input<inputs.VmwareVsphereInterfaceWorker>[]>;
}

/**
 * The set of arguments for constructing a VmwareVsphere resource.
 */
export interface VmwareVsphereArgs {
    clusterLabel?: pulumi.Input<string>;
    clusterSoftwareVersion?: pulumi.Input<string>;
    infrastructureId: pulumi.Input<number>;
    instanceArrayCustomVariablesMaster?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    instanceArrayCustomVariablesWorker?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    instanceArrayInstanceCountMaster?: pulumi.Input<number>;
    instanceArrayInstanceCountWorker?: pulumi.Input<number>;
    instanceArrayNetworkProfileMasters?: pulumi.Input<pulumi.Input<inputs.VmwareVsphereInstanceArrayNetworkProfileMaster>[]>;
    instanceArrayNetworkProfileWorkers?: pulumi.Input<pulumi.Input<inputs.VmwareVsphereInstanceArrayNetworkProfileWorker>[]>;
    instanceArrays?: pulumi.Input<pulumi.Input<inputs.VmwareVsphereInstanceArray>[]>;
    instanceCustomVariablesMasters?: pulumi.Input<pulumi.Input<inputs.VmwareVsphereInstanceCustomVariablesMaster>[]>;
    instanceCustomVariablesWorkers?: pulumi.Input<pulumi.Input<inputs.VmwareVsphereInstanceCustomVariablesWorker>[]>;
    instanceServerTypeMasters?: pulumi.Input<pulumi.Input<inputs.VmwareVsphereInstanceServerTypeMaster>[]>;
    instanceServerTypeWorkers?: pulumi.Input<pulumi.Input<inputs.VmwareVsphereInstanceServerTypeWorker>[]>;
    interfaceMasters?: pulumi.Input<pulumi.Input<inputs.VmwareVsphereInterfaceMaster>[]>;
    interfaceWorkers?: pulumi.Input<pulumi.Input<inputs.VmwareVsphereInterfaceWorker>[]>;
}
