// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class PsqlDbSystem extends pulumi.CustomResource {
    /**
     * Get an existing PsqlDbSystem resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PsqlDbSystemState, opts?: pulumi.CustomResourceOptions): PsqlDbSystem {
        return new PsqlDbSystem(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'oci:index/psqlDbSystem:PsqlDbSystem';

    /**
     * Returns true if the given object is an instance of PsqlDbSystem.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PsqlDbSystem {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PsqlDbSystem.__pulumiType;
    }

    public /*out*/ readonly adminUsername!: pulumi.Output<string>;
    public readonly applyConfig!: pulumi.Output<string | undefined>;
    public readonly compartmentId!: pulumi.Output<string>;
    public readonly configId!: pulumi.Output<string>;
    public readonly credentials!: pulumi.Output<outputs.PsqlDbSystemCredentials | undefined>;
    public readonly dbVersion!: pulumi.Output<string>;
    public readonly definedTags!: pulumi.Output<{[key: string]: string}>;
    public readonly description!: pulumi.Output<string>;
    public readonly displayName!: pulumi.Output<string>;
    public readonly freeformTags!: pulumi.Output<{[key: string]: string}>;
    public readonly instanceCount!: pulumi.Output<number>;
    public readonly instanceMemorySizeInGbs!: pulumi.Output<number>;
    public readonly instanceOcpuCount!: pulumi.Output<number>;
    public /*out*/ readonly instances!: pulumi.Output<outputs.PsqlDbSystemInstance[]>;
    public readonly instancesDetails!: pulumi.Output<outputs.PsqlDbSystemInstancesDetail[] | undefined>;
    public /*out*/ readonly lifecycleDetails!: pulumi.Output<string>;
    public readonly managementPolicy!: pulumi.Output<outputs.PsqlDbSystemManagementPolicy | undefined>;
    public readonly networkDetails!: pulumi.Output<outputs.PsqlDbSystemNetworkDetails>;
    public readonly patchOperations!: pulumi.Output<outputs.PsqlDbSystemPatchOperation[] | undefined>;
    public readonly shape!: pulumi.Output<string>;
    public readonly source!: pulumi.Output<outputs.PsqlDbSystemSource | undefined>;
    public /*out*/ readonly state!: pulumi.Output<string>;
    public readonly storageDetails!: pulumi.Output<outputs.PsqlDbSystemStorageDetails>;
    public /*out*/ readonly systemTags!: pulumi.Output<{[key: string]: string}>;
    public readonly systemType!: pulumi.Output<string>;
    public /*out*/ readonly timeCreated!: pulumi.Output<string>;
    public /*out*/ readonly timeUpdated!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.PsqlDbSystemTimeouts | undefined>;

    /**
     * Create a PsqlDbSystem resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PsqlDbSystemArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: PsqlDbSystemArgs | PsqlDbSystemState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as PsqlDbSystemState | undefined;
            resourceInputs["adminUsername"] = state ? state.adminUsername : undefined;
            resourceInputs["applyConfig"] = state ? state.applyConfig : undefined;
            resourceInputs["compartmentId"] = state ? state.compartmentId : undefined;
            resourceInputs["configId"] = state ? state.configId : undefined;
            resourceInputs["credentials"] = state ? state.credentials : undefined;
            resourceInputs["dbVersion"] = state ? state.dbVersion : undefined;
            resourceInputs["definedTags"] = state ? state.definedTags : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["displayName"] = state ? state.displayName : undefined;
            resourceInputs["freeformTags"] = state ? state.freeformTags : undefined;
            resourceInputs["instanceCount"] = state ? state.instanceCount : undefined;
            resourceInputs["instanceMemorySizeInGbs"] = state ? state.instanceMemorySizeInGbs : undefined;
            resourceInputs["instanceOcpuCount"] = state ? state.instanceOcpuCount : undefined;
            resourceInputs["instances"] = state ? state.instances : undefined;
            resourceInputs["instancesDetails"] = state ? state.instancesDetails : undefined;
            resourceInputs["lifecycleDetails"] = state ? state.lifecycleDetails : undefined;
            resourceInputs["managementPolicy"] = state ? state.managementPolicy : undefined;
            resourceInputs["networkDetails"] = state ? state.networkDetails : undefined;
            resourceInputs["patchOperations"] = state ? state.patchOperations : undefined;
            resourceInputs["shape"] = state ? state.shape : undefined;
            resourceInputs["source"] = state ? state.source : undefined;
            resourceInputs["state"] = state ? state.state : undefined;
            resourceInputs["storageDetails"] = state ? state.storageDetails : undefined;
            resourceInputs["systemTags"] = state ? state.systemTags : undefined;
            resourceInputs["systemType"] = state ? state.systemType : undefined;
            resourceInputs["timeCreated"] = state ? state.timeCreated : undefined;
            resourceInputs["timeUpdated"] = state ? state.timeUpdated : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as PsqlDbSystemArgs | undefined;
            if ((!args || args.compartmentId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'compartmentId'");
            }
            if ((!args || args.dbVersion === undefined) && !opts.urn) {
                throw new Error("Missing required property 'dbVersion'");
            }
            if ((!args || args.displayName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'displayName'");
            }
            if ((!args || args.networkDetails === undefined) && !opts.urn) {
                throw new Error("Missing required property 'networkDetails'");
            }
            if ((!args || args.shape === undefined) && !opts.urn) {
                throw new Error("Missing required property 'shape'");
            }
            if ((!args || args.storageDetails === undefined) && !opts.urn) {
                throw new Error("Missing required property 'storageDetails'");
            }
            resourceInputs["applyConfig"] = args ? args.applyConfig : undefined;
            resourceInputs["compartmentId"] = args ? args.compartmentId : undefined;
            resourceInputs["configId"] = args ? args.configId : undefined;
            resourceInputs["credentials"] = args ? args.credentials : undefined;
            resourceInputs["dbVersion"] = args ? args.dbVersion : undefined;
            resourceInputs["definedTags"] = args ? args.definedTags : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["freeformTags"] = args ? args.freeformTags : undefined;
            resourceInputs["instanceCount"] = args ? args.instanceCount : undefined;
            resourceInputs["instanceMemorySizeInGbs"] = args ? args.instanceMemorySizeInGbs : undefined;
            resourceInputs["instanceOcpuCount"] = args ? args.instanceOcpuCount : undefined;
            resourceInputs["instancesDetails"] = args ? args.instancesDetails : undefined;
            resourceInputs["managementPolicy"] = args ? args.managementPolicy : undefined;
            resourceInputs["networkDetails"] = args ? args.networkDetails : undefined;
            resourceInputs["patchOperations"] = args ? args.patchOperations : undefined;
            resourceInputs["shape"] = args ? args.shape : undefined;
            resourceInputs["source"] = args ? args.source : undefined;
            resourceInputs["storageDetails"] = args ? args.storageDetails : undefined;
            resourceInputs["systemType"] = args ? args.systemType : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["adminUsername"] = undefined /*out*/;
            resourceInputs["instances"] = undefined /*out*/;
            resourceInputs["lifecycleDetails"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["systemTags"] = undefined /*out*/;
            resourceInputs["timeCreated"] = undefined /*out*/;
            resourceInputs["timeUpdated"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(PsqlDbSystem.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering PsqlDbSystem resources.
 */
export interface PsqlDbSystemState {
    adminUsername?: pulumi.Input<string>;
    applyConfig?: pulumi.Input<string>;
    compartmentId?: pulumi.Input<string>;
    configId?: pulumi.Input<string>;
    credentials?: pulumi.Input<inputs.PsqlDbSystemCredentials>;
    dbVersion?: pulumi.Input<string>;
    definedTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    description?: pulumi.Input<string>;
    displayName?: pulumi.Input<string>;
    freeformTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    instanceCount?: pulumi.Input<number>;
    instanceMemorySizeInGbs?: pulumi.Input<number>;
    instanceOcpuCount?: pulumi.Input<number>;
    instances?: pulumi.Input<pulumi.Input<inputs.PsqlDbSystemInstance>[]>;
    instancesDetails?: pulumi.Input<pulumi.Input<inputs.PsqlDbSystemInstancesDetail>[]>;
    lifecycleDetails?: pulumi.Input<string>;
    managementPolicy?: pulumi.Input<inputs.PsqlDbSystemManagementPolicy>;
    networkDetails?: pulumi.Input<inputs.PsqlDbSystemNetworkDetails>;
    patchOperations?: pulumi.Input<pulumi.Input<inputs.PsqlDbSystemPatchOperation>[]>;
    shape?: pulumi.Input<string>;
    source?: pulumi.Input<inputs.PsqlDbSystemSource>;
    state?: pulumi.Input<string>;
    storageDetails?: pulumi.Input<inputs.PsqlDbSystemStorageDetails>;
    systemTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    systemType?: pulumi.Input<string>;
    timeCreated?: pulumi.Input<string>;
    timeUpdated?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.PsqlDbSystemTimeouts>;
}

/**
 * The set of arguments for constructing a PsqlDbSystem resource.
 */
export interface PsqlDbSystemArgs {
    applyConfig?: pulumi.Input<string>;
    compartmentId: pulumi.Input<string>;
    configId?: pulumi.Input<string>;
    credentials?: pulumi.Input<inputs.PsqlDbSystemCredentials>;
    dbVersion: pulumi.Input<string>;
    definedTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    description?: pulumi.Input<string>;
    displayName: pulumi.Input<string>;
    freeformTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    instanceCount?: pulumi.Input<number>;
    instanceMemorySizeInGbs?: pulumi.Input<number>;
    instanceOcpuCount?: pulumi.Input<number>;
    instancesDetails?: pulumi.Input<pulumi.Input<inputs.PsqlDbSystemInstancesDetail>[]>;
    managementPolicy?: pulumi.Input<inputs.PsqlDbSystemManagementPolicy>;
    networkDetails: pulumi.Input<inputs.PsqlDbSystemNetworkDetails>;
    patchOperations?: pulumi.Input<pulumi.Input<inputs.PsqlDbSystemPatchOperation>[]>;
    shape: pulumi.Input<string>;
    source?: pulumi.Input<inputs.PsqlDbSystemSource>;
    storageDetails: pulumi.Input<inputs.PsqlDbSystemStorageDetails>;
    systemType?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.PsqlDbSystemTimeouts>;
}
