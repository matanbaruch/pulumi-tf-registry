// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class WirelesscontrollerMpskprofileMpskgroupMpskkey extends pulumi.CustomResource {
    /**
     * Get an existing WirelesscontrollerMpskprofileMpskgroupMpskkey resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: WirelesscontrollerMpskprofileMpskgroupMpskkeyState, opts?: pulumi.CustomResourceOptions): WirelesscontrollerMpskprofileMpskgroupMpskkey {
        return new WirelesscontrollerMpskprofileMpskgroupMpskkey(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fmgdevice:index/wirelesscontrollerMpskprofileMpskgroupMpskkey:WirelesscontrollerMpskprofileMpskgroupMpskkey';

    /**
     * Returns true if the given object is an instance of WirelesscontrollerMpskprofileMpskgroupMpskkey.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WirelesscontrollerMpskprofileMpskgroupMpskkey {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WirelesscontrollerMpskprofileMpskgroupMpskkey.__pulumiType;
    }

    public readonly comment!: pulumi.Output<string | undefined>;
    public readonly concurrentClientLimitType!: pulumi.Output<string>;
    public readonly concurrentClients!: pulumi.Output<number>;
    public readonly deviceName!: pulumi.Output<string>;
    public readonly deviceVdom!: pulumi.Output<string>;
    public readonly keyType!: pulumi.Output<string>;
    public readonly mac!: pulumi.Output<string>;
    public readonly mpskGroup!: pulumi.Output<string>;
    public readonly mpskProfile!: pulumi.Output<string>;
    public readonly mpskSchedules!: pulumi.Output<string[]>;
    public readonly name!: pulumi.Output<string>;
    public readonly passphrases!: pulumi.Output<string[]>;
    public readonly pmks!: pulumi.Output<string[]>;
    public readonly saePasswords!: pulumi.Output<string[]>;
    public readonly saePk!: pulumi.Output<string>;
    public readonly saePrivateKey!: pulumi.Output<string | undefined>;

    /**
     * Create a WirelesscontrollerMpskprofileMpskgroupMpskkey resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WirelesscontrollerMpskprofileMpskgroupMpskkeyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: WirelesscontrollerMpskprofileMpskgroupMpskkeyArgs | WirelesscontrollerMpskprofileMpskgroupMpskkeyState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as WirelesscontrollerMpskprofileMpskgroupMpskkeyState | undefined;
            resourceInputs["comment"] = state ? state.comment : undefined;
            resourceInputs["concurrentClientLimitType"] = state ? state.concurrentClientLimitType : undefined;
            resourceInputs["concurrentClients"] = state ? state.concurrentClients : undefined;
            resourceInputs["deviceName"] = state ? state.deviceName : undefined;
            resourceInputs["deviceVdom"] = state ? state.deviceVdom : undefined;
            resourceInputs["keyType"] = state ? state.keyType : undefined;
            resourceInputs["mac"] = state ? state.mac : undefined;
            resourceInputs["mpskGroup"] = state ? state.mpskGroup : undefined;
            resourceInputs["mpskProfile"] = state ? state.mpskProfile : undefined;
            resourceInputs["mpskSchedules"] = state ? state.mpskSchedules : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["passphrases"] = state ? state.passphrases : undefined;
            resourceInputs["pmks"] = state ? state.pmks : undefined;
            resourceInputs["saePasswords"] = state ? state.saePasswords : undefined;
            resourceInputs["saePk"] = state ? state.saePk : undefined;
            resourceInputs["saePrivateKey"] = state ? state.saePrivateKey : undefined;
        } else {
            const args = argsOrState as WirelesscontrollerMpskprofileMpskgroupMpskkeyArgs | undefined;
            if ((!args || args.mpskGroup === undefined) && !opts.urn) {
                throw new Error("Missing required property 'mpskGroup'");
            }
            if ((!args || args.mpskProfile === undefined) && !opts.urn) {
                throw new Error("Missing required property 'mpskProfile'");
            }
            resourceInputs["comment"] = args ? args.comment : undefined;
            resourceInputs["concurrentClientLimitType"] = args ? args.concurrentClientLimitType : undefined;
            resourceInputs["concurrentClients"] = args ? args.concurrentClients : undefined;
            resourceInputs["deviceName"] = args ? args.deviceName : undefined;
            resourceInputs["deviceVdom"] = args ? args.deviceVdom : undefined;
            resourceInputs["keyType"] = args ? args.keyType : undefined;
            resourceInputs["mac"] = args ? args.mac : undefined;
            resourceInputs["mpskGroup"] = args ? args.mpskGroup : undefined;
            resourceInputs["mpskProfile"] = args ? args.mpskProfile : undefined;
            resourceInputs["mpskSchedules"] = args ? args.mpskSchedules : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["passphrases"] = args?.passphrases ? pulumi.secret(args.passphrases) : undefined;
            resourceInputs["pmks"] = args?.pmks ? pulumi.secret(args.pmks) : undefined;
            resourceInputs["saePasswords"] = args?.saePasswords ? pulumi.secret(args.saePasswords) : undefined;
            resourceInputs["saePk"] = args ? args.saePk : undefined;
            resourceInputs["saePrivateKey"] = args ? args.saePrivateKey : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["passphrases", "pmks", "saePasswords"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(WirelesscontrollerMpskprofileMpskgroupMpskkey.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering WirelesscontrollerMpskprofileMpskgroupMpskkey resources.
 */
export interface WirelesscontrollerMpskprofileMpskgroupMpskkeyState {
    comment?: pulumi.Input<string>;
    concurrentClientLimitType?: pulumi.Input<string>;
    concurrentClients?: pulumi.Input<number>;
    deviceName?: pulumi.Input<string>;
    deviceVdom?: pulumi.Input<string>;
    keyType?: pulumi.Input<string>;
    mac?: pulumi.Input<string>;
    mpskGroup?: pulumi.Input<string>;
    mpskProfile?: pulumi.Input<string>;
    mpskSchedules?: pulumi.Input<pulumi.Input<string>[]>;
    name?: pulumi.Input<string>;
    passphrases?: pulumi.Input<pulumi.Input<string>[]>;
    pmks?: pulumi.Input<pulumi.Input<string>[]>;
    saePasswords?: pulumi.Input<pulumi.Input<string>[]>;
    saePk?: pulumi.Input<string>;
    saePrivateKey?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a WirelesscontrollerMpskprofileMpskgroupMpskkey resource.
 */
export interface WirelesscontrollerMpskprofileMpskgroupMpskkeyArgs {
    comment?: pulumi.Input<string>;
    concurrentClientLimitType?: pulumi.Input<string>;
    concurrentClients?: pulumi.Input<number>;
    deviceName?: pulumi.Input<string>;
    deviceVdom?: pulumi.Input<string>;
    keyType?: pulumi.Input<string>;
    mac?: pulumi.Input<string>;
    mpskGroup: pulumi.Input<string>;
    mpskProfile: pulumi.Input<string>;
    mpskSchedules?: pulumi.Input<pulumi.Input<string>[]>;
    name?: pulumi.Input<string>;
    passphrases?: pulumi.Input<pulumi.Input<string>[]>;
    pmks?: pulumi.Input<pulumi.Input<string>[]>;
    saePasswords?: pulumi.Input<pulumi.Input<string>[]>;
    saePk?: pulumi.Input<string>;
    saePrivateKey?: pulumi.Input<string>;
}
