// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class MeInstallationTemplatePartitionSchemeHardwareRaid extends pulumi.CustomResource {
    /**
     * Get an existing MeInstallationTemplatePartitionSchemeHardwareRaid resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: MeInstallationTemplatePartitionSchemeHardwareRaidState, opts?: pulumi.CustomResourceOptions): MeInstallationTemplatePartitionSchemeHardwareRaid {
        return new MeInstallationTemplatePartitionSchemeHardwareRaid(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'ovh:index/meInstallationTemplatePartitionSchemeHardwareRaid:MeInstallationTemplatePartitionSchemeHardwareRaid';

    /**
     * Returns true if the given object is an instance of MeInstallationTemplatePartitionSchemeHardwareRaid.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MeInstallationTemplatePartitionSchemeHardwareRaid {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MeInstallationTemplatePartitionSchemeHardwareRaid.__pulumiType;
    }

    /**
     * Disk List. Syntax is cX:dY for disks and [cX:dY,cX:dY] for groups. With X and Y resp. the controller id and the disk id
     */
    public readonly disks!: pulumi.Output<string[]>;
    /**
     * RAID mode (raid0, raid1, raid10, raid5, raid50, raid6, raid60)
     */
    public readonly mode!: pulumi.Output<string>;
    /**
     * Hardware RAID name
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * name of this partitioning scheme
     */
    public readonly schemeName!: pulumi.Output<string>;
    /**
     * Specifies the creation order of the hardware RAID
     */
    public readonly step!: pulumi.Output<number>;
    /**
     * Template name
     */
    public readonly templateName!: pulumi.Output<string>;

    /**
     * Create a MeInstallationTemplatePartitionSchemeHardwareRaid resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MeInstallationTemplatePartitionSchemeHardwareRaidArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: MeInstallationTemplatePartitionSchemeHardwareRaidArgs | MeInstallationTemplatePartitionSchemeHardwareRaidState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as MeInstallationTemplatePartitionSchemeHardwareRaidState | undefined;
            resourceInputs["disks"] = state ? state.disks : undefined;
            resourceInputs["mode"] = state ? state.mode : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["schemeName"] = state ? state.schemeName : undefined;
            resourceInputs["step"] = state ? state.step : undefined;
            resourceInputs["templateName"] = state ? state.templateName : undefined;
        } else {
            const args = argsOrState as MeInstallationTemplatePartitionSchemeHardwareRaidArgs | undefined;
            if ((!args || args.disks === undefined) && !opts.urn) {
                throw new Error("Missing required property 'disks'");
            }
            if ((!args || args.mode === undefined) && !opts.urn) {
                throw new Error("Missing required property 'mode'");
            }
            if ((!args || args.schemeName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'schemeName'");
            }
            if ((!args || args.step === undefined) && !opts.urn) {
                throw new Error("Missing required property 'step'");
            }
            if ((!args || args.templateName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'templateName'");
            }
            resourceInputs["disks"] = args ? args.disks : undefined;
            resourceInputs["mode"] = args ? args.mode : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["schemeName"] = args ? args.schemeName : undefined;
            resourceInputs["step"] = args ? args.step : undefined;
            resourceInputs["templateName"] = args ? args.templateName : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(MeInstallationTemplatePartitionSchemeHardwareRaid.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering MeInstallationTemplatePartitionSchemeHardwareRaid resources.
 */
export interface MeInstallationTemplatePartitionSchemeHardwareRaidState {
    /**
     * Disk List. Syntax is cX:dY for disks and [cX:dY,cX:dY] for groups. With X and Y resp. the controller id and the disk id
     */
    disks?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * RAID mode (raid0, raid1, raid10, raid5, raid50, raid6, raid60)
     */
    mode?: pulumi.Input<string>;
    /**
     * Hardware RAID name
     */
    name?: pulumi.Input<string>;
    /**
     * name of this partitioning scheme
     */
    schemeName?: pulumi.Input<string>;
    /**
     * Specifies the creation order of the hardware RAID
     */
    step?: pulumi.Input<number>;
    /**
     * Template name
     */
    templateName?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a MeInstallationTemplatePartitionSchemeHardwareRaid resource.
 */
export interface MeInstallationTemplatePartitionSchemeHardwareRaidArgs {
    /**
     * Disk List. Syntax is cX:dY for disks and [cX:dY,cX:dY] for groups. With X and Y resp. the controller id and the disk id
     */
    disks: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * RAID mode (raid0, raid1, raid10, raid5, raid50, raid6, raid60)
     */
    mode: pulumi.Input<string>;
    /**
     * Hardware RAID name
     */
    name?: pulumi.Input<string>;
    /**
     * name of this partitioning scheme
     */
    schemeName: pulumi.Input<string>;
    /**
     * Specifies the creation order of the hardware RAID
     */
    step: pulumi.Input<number>;
    /**
     * Template name
     */
    templateName: pulumi.Input<string>;
}
