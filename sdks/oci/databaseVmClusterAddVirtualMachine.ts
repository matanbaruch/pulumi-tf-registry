// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class DatabaseVmClusterAddVirtualMachine extends pulumi.CustomResource {
    /**
     * Get an existing DatabaseVmClusterAddVirtualMachine resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DatabaseVmClusterAddVirtualMachineState, opts?: pulumi.CustomResourceOptions): DatabaseVmClusterAddVirtualMachine {
        return new DatabaseVmClusterAddVirtualMachine(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'oci:index/databaseVmClusterAddVirtualMachine:DatabaseVmClusterAddVirtualMachine';

    /**
     * Returns true if the given object is an instance of DatabaseVmClusterAddVirtualMachine.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DatabaseVmClusterAddVirtualMachine {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DatabaseVmClusterAddVirtualMachine.__pulumiType;
    }

    public /*out*/ readonly availabilityDomain!: pulumi.Output<string>;
    public /*out*/ readonly compartmentId!: pulumi.Output<string>;
    public /*out*/ readonly cpusEnabled!: pulumi.Output<number>;
    public /*out*/ readonly dataCollectionOptions!: pulumi.Output<outputs.DatabaseVmClusterAddVirtualMachineDataCollectionOption[]>;
    public /*out*/ readonly dataStorageSizeInGb!: pulumi.Output<number>;
    public /*out*/ readonly dataStorageSizeInTbs!: pulumi.Output<number>;
    public /*out*/ readonly dbNodeStorageSizeInGbs!: pulumi.Output<number>;
    public readonly dbServers!: pulumi.Output<outputs.DatabaseVmClusterAddVirtualMachineDbServer[]>;
    public /*out*/ readonly definedTags!: pulumi.Output<{[key: string]: string}>;
    public /*out*/ readonly displayName!: pulumi.Output<string>;
    public /*out*/ readonly exadataInfrastructureId!: pulumi.Output<string>;
    public /*out*/ readonly fileSystemConfigurationDetails!: pulumi.Output<outputs.DatabaseVmClusterAddVirtualMachineFileSystemConfigurationDetail[]>;
    public /*out*/ readonly freeformTags!: pulumi.Output<{[key: string]: string}>;
    public /*out*/ readonly giVersion!: pulumi.Output<string>;
    public /*out*/ readonly isLocalBackupEnabled!: pulumi.Output<boolean>;
    public /*out*/ readonly isSparseDiskgroupEnabled!: pulumi.Output<boolean>;
    public /*out*/ readonly lastPatchHistoryEntryId!: pulumi.Output<string>;
    public /*out*/ readonly licenseModel!: pulumi.Output<string>;
    public /*out*/ readonly lifecycleDetails!: pulumi.Output<string>;
    public /*out*/ readonly memorySizeInGbs!: pulumi.Output<number>;
    public /*out*/ readonly ocpusEnabled!: pulumi.Output<number>;
    public /*out*/ readonly shape!: pulumi.Output<string>;
    public /*out*/ readonly sshPublicKeys!: pulumi.Output<string[]>;
    public /*out*/ readonly state!: pulumi.Output<string>;
    public /*out*/ readonly systemVersion!: pulumi.Output<string>;
    public /*out*/ readonly timeCreated!: pulumi.Output<string>;
    public /*out*/ readonly timeZone!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.DatabaseVmClusterAddVirtualMachineTimeouts | undefined>;
    public readonly vmClusterId!: pulumi.Output<string>;
    public /*out*/ readonly vmClusterNetworkId!: pulumi.Output<string>;

    /**
     * Create a DatabaseVmClusterAddVirtualMachine resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DatabaseVmClusterAddVirtualMachineArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DatabaseVmClusterAddVirtualMachineArgs | DatabaseVmClusterAddVirtualMachineState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DatabaseVmClusterAddVirtualMachineState | undefined;
            resourceInputs["availabilityDomain"] = state ? state.availabilityDomain : undefined;
            resourceInputs["compartmentId"] = state ? state.compartmentId : undefined;
            resourceInputs["cpusEnabled"] = state ? state.cpusEnabled : undefined;
            resourceInputs["dataCollectionOptions"] = state ? state.dataCollectionOptions : undefined;
            resourceInputs["dataStorageSizeInGb"] = state ? state.dataStorageSizeInGb : undefined;
            resourceInputs["dataStorageSizeInTbs"] = state ? state.dataStorageSizeInTbs : undefined;
            resourceInputs["dbNodeStorageSizeInGbs"] = state ? state.dbNodeStorageSizeInGbs : undefined;
            resourceInputs["dbServers"] = state ? state.dbServers : undefined;
            resourceInputs["definedTags"] = state ? state.definedTags : undefined;
            resourceInputs["displayName"] = state ? state.displayName : undefined;
            resourceInputs["exadataInfrastructureId"] = state ? state.exadataInfrastructureId : undefined;
            resourceInputs["fileSystemConfigurationDetails"] = state ? state.fileSystemConfigurationDetails : undefined;
            resourceInputs["freeformTags"] = state ? state.freeformTags : undefined;
            resourceInputs["giVersion"] = state ? state.giVersion : undefined;
            resourceInputs["isLocalBackupEnabled"] = state ? state.isLocalBackupEnabled : undefined;
            resourceInputs["isSparseDiskgroupEnabled"] = state ? state.isSparseDiskgroupEnabled : undefined;
            resourceInputs["lastPatchHistoryEntryId"] = state ? state.lastPatchHistoryEntryId : undefined;
            resourceInputs["licenseModel"] = state ? state.licenseModel : undefined;
            resourceInputs["lifecycleDetails"] = state ? state.lifecycleDetails : undefined;
            resourceInputs["memorySizeInGbs"] = state ? state.memorySizeInGbs : undefined;
            resourceInputs["ocpusEnabled"] = state ? state.ocpusEnabled : undefined;
            resourceInputs["shape"] = state ? state.shape : undefined;
            resourceInputs["sshPublicKeys"] = state ? state.sshPublicKeys : undefined;
            resourceInputs["state"] = state ? state.state : undefined;
            resourceInputs["systemVersion"] = state ? state.systemVersion : undefined;
            resourceInputs["timeCreated"] = state ? state.timeCreated : undefined;
            resourceInputs["timeZone"] = state ? state.timeZone : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["vmClusterId"] = state ? state.vmClusterId : undefined;
            resourceInputs["vmClusterNetworkId"] = state ? state.vmClusterNetworkId : undefined;
        } else {
            const args = argsOrState as DatabaseVmClusterAddVirtualMachineArgs | undefined;
            if ((!args || args.dbServers === undefined) && !opts.urn) {
                throw new Error("Missing required property 'dbServers'");
            }
            if ((!args || args.vmClusterId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'vmClusterId'");
            }
            resourceInputs["dbServers"] = args ? args.dbServers : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["vmClusterId"] = args ? args.vmClusterId : undefined;
            resourceInputs["availabilityDomain"] = undefined /*out*/;
            resourceInputs["compartmentId"] = undefined /*out*/;
            resourceInputs["cpusEnabled"] = undefined /*out*/;
            resourceInputs["dataCollectionOptions"] = undefined /*out*/;
            resourceInputs["dataStorageSizeInGb"] = undefined /*out*/;
            resourceInputs["dataStorageSizeInTbs"] = undefined /*out*/;
            resourceInputs["dbNodeStorageSizeInGbs"] = undefined /*out*/;
            resourceInputs["definedTags"] = undefined /*out*/;
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["exadataInfrastructureId"] = undefined /*out*/;
            resourceInputs["fileSystemConfigurationDetails"] = undefined /*out*/;
            resourceInputs["freeformTags"] = undefined /*out*/;
            resourceInputs["giVersion"] = undefined /*out*/;
            resourceInputs["isLocalBackupEnabled"] = undefined /*out*/;
            resourceInputs["isSparseDiskgroupEnabled"] = undefined /*out*/;
            resourceInputs["lastPatchHistoryEntryId"] = undefined /*out*/;
            resourceInputs["licenseModel"] = undefined /*out*/;
            resourceInputs["lifecycleDetails"] = undefined /*out*/;
            resourceInputs["memorySizeInGbs"] = undefined /*out*/;
            resourceInputs["ocpusEnabled"] = undefined /*out*/;
            resourceInputs["shape"] = undefined /*out*/;
            resourceInputs["sshPublicKeys"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["systemVersion"] = undefined /*out*/;
            resourceInputs["timeCreated"] = undefined /*out*/;
            resourceInputs["timeZone"] = undefined /*out*/;
            resourceInputs["vmClusterNetworkId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DatabaseVmClusterAddVirtualMachine.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DatabaseVmClusterAddVirtualMachine resources.
 */
export interface DatabaseVmClusterAddVirtualMachineState {
    availabilityDomain?: pulumi.Input<string>;
    compartmentId?: pulumi.Input<string>;
    cpusEnabled?: pulumi.Input<number>;
    dataCollectionOptions?: pulumi.Input<pulumi.Input<inputs.DatabaseVmClusterAddVirtualMachineDataCollectionOption>[]>;
    dataStorageSizeInGb?: pulumi.Input<number>;
    dataStorageSizeInTbs?: pulumi.Input<number>;
    dbNodeStorageSizeInGbs?: pulumi.Input<number>;
    dbServers?: pulumi.Input<pulumi.Input<inputs.DatabaseVmClusterAddVirtualMachineDbServer>[]>;
    definedTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    displayName?: pulumi.Input<string>;
    exadataInfrastructureId?: pulumi.Input<string>;
    fileSystemConfigurationDetails?: pulumi.Input<pulumi.Input<inputs.DatabaseVmClusterAddVirtualMachineFileSystemConfigurationDetail>[]>;
    freeformTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    giVersion?: pulumi.Input<string>;
    isLocalBackupEnabled?: pulumi.Input<boolean>;
    isSparseDiskgroupEnabled?: pulumi.Input<boolean>;
    lastPatchHistoryEntryId?: pulumi.Input<string>;
    licenseModel?: pulumi.Input<string>;
    lifecycleDetails?: pulumi.Input<string>;
    memorySizeInGbs?: pulumi.Input<number>;
    ocpusEnabled?: pulumi.Input<number>;
    shape?: pulumi.Input<string>;
    sshPublicKeys?: pulumi.Input<pulumi.Input<string>[]>;
    state?: pulumi.Input<string>;
    systemVersion?: pulumi.Input<string>;
    timeCreated?: pulumi.Input<string>;
    timeZone?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.DatabaseVmClusterAddVirtualMachineTimeouts>;
    vmClusterId?: pulumi.Input<string>;
    vmClusterNetworkId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a DatabaseVmClusterAddVirtualMachine resource.
 */
export interface DatabaseVmClusterAddVirtualMachineArgs {
    dbServers: pulumi.Input<pulumi.Input<inputs.DatabaseVmClusterAddVirtualMachineDbServer>[]>;
    timeouts?: pulumi.Input<inputs.DatabaseVmClusterAddVirtualMachineTimeouts>;
    vmClusterId: pulumi.Input<string>;
}
