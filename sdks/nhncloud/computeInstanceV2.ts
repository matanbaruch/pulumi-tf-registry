// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ComputeInstanceV2 extends pulumi.CustomResource {
    /**
     * Get an existing ComputeInstanceV2 resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ComputeInstanceV2State, opts?: pulumi.CustomResourceOptions): ComputeInstanceV2 {
        return new ComputeInstanceV2(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'nhncloud:index/computeInstanceV2:ComputeInstanceV2';

    /**
     * Returns true if the given object is an instance of ComputeInstanceV2.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ComputeInstanceV2 {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ComputeInstanceV2.__pulumiType;
    }

    public readonly accessIpV4!: pulumi.Output<string>;
    public readonly accessIpV6!: pulumi.Output<string>;
    public readonly adminPass!: pulumi.Output<string | undefined>;
    public /*out*/ readonly allMetadata!: pulumi.Output<{[key: string]: string}>;
    public /*out*/ readonly allTags!: pulumi.Output<string[]>;
    public readonly availabilityZone!: pulumi.Output<string>;
    public readonly availabilityZoneHints!: pulumi.Output<string | undefined>;
    public readonly blockDevices!: pulumi.Output<outputs.ComputeInstanceV2BlockDevice[] | undefined>;
    public readonly configDrive!: pulumi.Output<boolean | undefined>;
    public /*out*/ readonly created!: pulumi.Output<string>;
    public readonly flavorId!: pulumi.Output<string>;
    public readonly flavorName!: pulumi.Output<string>;
    /**
     * @deprecated Deprecated
     */
    public readonly floatingIp!: pulumi.Output<string | undefined>;
    public readonly forceDelete!: pulumi.Output<boolean | undefined>;
    public readonly imageId!: pulumi.Output<string>;
    public readonly imageName!: pulumi.Output<string>;
    public readonly keyPair!: pulumi.Output<string | undefined>;
    public readonly metadata!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly networkMode!: pulumi.Output<string | undefined>;
    public readonly networks!: pulumi.Output<outputs.ComputeInstanceV2Network[] | undefined>;
    public readonly personalities!: pulumi.Output<outputs.ComputeInstanceV2Personality[] | undefined>;
    public readonly powerState!: pulumi.Output<string | undefined>;
    public readonly region!: pulumi.Output<string>;
    public readonly schedulerHints!: pulumi.Output<outputs.ComputeInstanceV2SchedulerHint[] | undefined>;
    public readonly securityGroups!: pulumi.Output<string[]>;
    public readonly stopBeforeDestroy!: pulumi.Output<boolean | undefined>;
    public readonly tags!: pulumi.Output<string[] | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.ComputeInstanceV2Timeouts | undefined>;
    public /*out*/ readonly updated!: pulumi.Output<string>;
    public readonly userData!: pulumi.Output<string | undefined>;
    public readonly vendorOptions!: pulumi.Output<outputs.ComputeInstanceV2VendorOptions | undefined>;
    /**
     * @deprecated Deprecated
     */
    public readonly volumes!: pulumi.Output<outputs.ComputeInstanceV2Volume[] | undefined>;

    /**
     * Create a ComputeInstanceV2 resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ComputeInstanceV2Args, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ComputeInstanceV2Args | ComputeInstanceV2State, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ComputeInstanceV2State | undefined;
            resourceInputs["accessIpV4"] = state ? state.accessIpV4 : undefined;
            resourceInputs["accessIpV6"] = state ? state.accessIpV6 : undefined;
            resourceInputs["adminPass"] = state ? state.adminPass : undefined;
            resourceInputs["allMetadata"] = state ? state.allMetadata : undefined;
            resourceInputs["allTags"] = state ? state.allTags : undefined;
            resourceInputs["availabilityZone"] = state ? state.availabilityZone : undefined;
            resourceInputs["availabilityZoneHints"] = state ? state.availabilityZoneHints : undefined;
            resourceInputs["blockDevices"] = state ? state.blockDevices : undefined;
            resourceInputs["configDrive"] = state ? state.configDrive : undefined;
            resourceInputs["created"] = state ? state.created : undefined;
            resourceInputs["flavorId"] = state ? state.flavorId : undefined;
            resourceInputs["flavorName"] = state ? state.flavorName : undefined;
            resourceInputs["floatingIp"] = state ? state.floatingIp : undefined;
            resourceInputs["forceDelete"] = state ? state.forceDelete : undefined;
            resourceInputs["imageId"] = state ? state.imageId : undefined;
            resourceInputs["imageName"] = state ? state.imageName : undefined;
            resourceInputs["keyPair"] = state ? state.keyPair : undefined;
            resourceInputs["metadata"] = state ? state.metadata : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["networkMode"] = state ? state.networkMode : undefined;
            resourceInputs["networks"] = state ? state.networks : undefined;
            resourceInputs["personalities"] = state ? state.personalities : undefined;
            resourceInputs["powerState"] = state ? state.powerState : undefined;
            resourceInputs["region"] = state ? state.region : undefined;
            resourceInputs["schedulerHints"] = state ? state.schedulerHints : undefined;
            resourceInputs["securityGroups"] = state ? state.securityGroups : undefined;
            resourceInputs["stopBeforeDestroy"] = state ? state.stopBeforeDestroy : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["updated"] = state ? state.updated : undefined;
            resourceInputs["userData"] = state ? state.userData : undefined;
            resourceInputs["vendorOptions"] = state ? state.vendorOptions : undefined;
            resourceInputs["volumes"] = state ? state.volumes : undefined;
        } else {
            const args = argsOrState as ComputeInstanceV2Args | undefined;
            resourceInputs["accessIpV4"] = args ? args.accessIpV4 : undefined;
            resourceInputs["accessIpV6"] = args ? args.accessIpV6 : undefined;
            resourceInputs["adminPass"] = args?.adminPass ? pulumi.secret(args.adminPass) : undefined;
            resourceInputs["availabilityZone"] = args ? args.availabilityZone : undefined;
            resourceInputs["availabilityZoneHints"] = args ? args.availabilityZoneHints : undefined;
            resourceInputs["blockDevices"] = args ? args.blockDevices : undefined;
            resourceInputs["configDrive"] = args ? args.configDrive : undefined;
            resourceInputs["flavorId"] = args ? args.flavorId : undefined;
            resourceInputs["flavorName"] = args ? args.flavorName : undefined;
            resourceInputs["floatingIp"] = args ? args.floatingIp : undefined;
            resourceInputs["forceDelete"] = args ? args.forceDelete : undefined;
            resourceInputs["imageId"] = args ? args.imageId : undefined;
            resourceInputs["imageName"] = args ? args.imageName : undefined;
            resourceInputs["keyPair"] = args ? args.keyPair : undefined;
            resourceInputs["metadata"] = args ? args.metadata : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["networkMode"] = args ? args.networkMode : undefined;
            resourceInputs["networks"] = args ? args.networks : undefined;
            resourceInputs["personalities"] = args ? args.personalities : undefined;
            resourceInputs["powerState"] = args ? args.powerState : undefined;
            resourceInputs["region"] = args ? args.region : undefined;
            resourceInputs["schedulerHints"] = args ? args.schedulerHints : undefined;
            resourceInputs["securityGroups"] = args ? args.securityGroups : undefined;
            resourceInputs["stopBeforeDestroy"] = args ? args.stopBeforeDestroy : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["userData"] = args ? args.userData : undefined;
            resourceInputs["vendorOptions"] = args ? args.vendorOptions : undefined;
            resourceInputs["volumes"] = args ? args.volumes : undefined;
            resourceInputs["allMetadata"] = undefined /*out*/;
            resourceInputs["allTags"] = undefined /*out*/;
            resourceInputs["created"] = undefined /*out*/;
            resourceInputs["updated"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["adminPass"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(ComputeInstanceV2.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ComputeInstanceV2 resources.
 */
export interface ComputeInstanceV2State {
    accessIpV4?: pulumi.Input<string>;
    accessIpV6?: pulumi.Input<string>;
    adminPass?: pulumi.Input<string>;
    allMetadata?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    allTags?: pulumi.Input<pulumi.Input<string>[]>;
    availabilityZone?: pulumi.Input<string>;
    availabilityZoneHints?: pulumi.Input<string>;
    blockDevices?: pulumi.Input<pulumi.Input<inputs.ComputeInstanceV2BlockDevice>[]>;
    configDrive?: pulumi.Input<boolean>;
    created?: pulumi.Input<string>;
    flavorId?: pulumi.Input<string>;
    flavorName?: pulumi.Input<string>;
    /**
     * @deprecated Deprecated
     */
    floatingIp?: pulumi.Input<string>;
    forceDelete?: pulumi.Input<boolean>;
    imageId?: pulumi.Input<string>;
    imageName?: pulumi.Input<string>;
    keyPair?: pulumi.Input<string>;
    metadata?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    name?: pulumi.Input<string>;
    networkMode?: pulumi.Input<string>;
    networks?: pulumi.Input<pulumi.Input<inputs.ComputeInstanceV2Network>[]>;
    personalities?: pulumi.Input<pulumi.Input<inputs.ComputeInstanceV2Personality>[]>;
    powerState?: pulumi.Input<string>;
    region?: pulumi.Input<string>;
    schedulerHints?: pulumi.Input<pulumi.Input<inputs.ComputeInstanceV2SchedulerHint>[]>;
    securityGroups?: pulumi.Input<pulumi.Input<string>[]>;
    stopBeforeDestroy?: pulumi.Input<boolean>;
    tags?: pulumi.Input<pulumi.Input<string>[]>;
    timeouts?: pulumi.Input<inputs.ComputeInstanceV2Timeouts>;
    updated?: pulumi.Input<string>;
    userData?: pulumi.Input<string>;
    vendorOptions?: pulumi.Input<inputs.ComputeInstanceV2VendorOptions>;
    /**
     * @deprecated Deprecated
     */
    volumes?: pulumi.Input<pulumi.Input<inputs.ComputeInstanceV2Volume>[]>;
}

/**
 * The set of arguments for constructing a ComputeInstanceV2 resource.
 */
export interface ComputeInstanceV2Args {
    accessIpV4?: pulumi.Input<string>;
    accessIpV6?: pulumi.Input<string>;
    adminPass?: pulumi.Input<string>;
    availabilityZone?: pulumi.Input<string>;
    availabilityZoneHints?: pulumi.Input<string>;
    blockDevices?: pulumi.Input<pulumi.Input<inputs.ComputeInstanceV2BlockDevice>[]>;
    configDrive?: pulumi.Input<boolean>;
    flavorId?: pulumi.Input<string>;
    flavorName?: pulumi.Input<string>;
    /**
     * @deprecated Deprecated
     */
    floatingIp?: pulumi.Input<string>;
    forceDelete?: pulumi.Input<boolean>;
    imageId?: pulumi.Input<string>;
    imageName?: pulumi.Input<string>;
    keyPair?: pulumi.Input<string>;
    metadata?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    name?: pulumi.Input<string>;
    networkMode?: pulumi.Input<string>;
    networks?: pulumi.Input<pulumi.Input<inputs.ComputeInstanceV2Network>[]>;
    personalities?: pulumi.Input<pulumi.Input<inputs.ComputeInstanceV2Personality>[]>;
    powerState?: pulumi.Input<string>;
    region?: pulumi.Input<string>;
    schedulerHints?: pulumi.Input<pulumi.Input<inputs.ComputeInstanceV2SchedulerHint>[]>;
    securityGroups?: pulumi.Input<pulumi.Input<string>[]>;
    stopBeforeDestroy?: pulumi.Input<boolean>;
    tags?: pulumi.Input<pulumi.Input<string>[]>;
    timeouts?: pulumi.Input<inputs.ComputeInstanceV2Timeouts>;
    userData?: pulumi.Input<string>;
    vendorOptions?: pulumi.Input<inputs.ComputeInstanceV2VendorOptions>;
    /**
     * @deprecated Deprecated
     */
    volumes?: pulumi.Input<pulumi.Input<inputs.ComputeInstanceV2Volume>[]>;
}
