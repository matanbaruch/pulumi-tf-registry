// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class FirewallSshSetting extends pulumi.CustomResource {
    /**
     * Get an existing FirewallSshSetting resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: FirewallSshSettingState, opts?: pulumi.CustomResourceOptions): FirewallSshSetting {
        return new FirewallSshSetting(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fmgdevice:index/firewallSshSetting:FirewallSshSetting';

    /**
     * Returns true if the given object is an instance of FirewallSshSetting.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is FirewallSshSetting {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === FirewallSshSetting.__pulumiType;
    }

    public readonly caname!: pulumi.Output<string>;
    public readonly deviceName!: pulumi.Output<string>;
    public readonly deviceVdom!: pulumi.Output<string>;
    public readonly hostTrustedChecking!: pulumi.Output<string>;
    public readonly hostkeyDsa1024s!: pulumi.Output<string[]>;
    public readonly hostkeyEcdsa256s!: pulumi.Output<string[]>;
    public readonly hostkeyEcdsa384s!: pulumi.Output<string[]>;
    public readonly hostkeyEcdsa521s!: pulumi.Output<string[]>;
    public readonly hostkeyEd25519s!: pulumi.Output<string[]>;
    public readonly hostkeyRsa2048s!: pulumi.Output<string[]>;
    public readonly untrustedCanames!: pulumi.Output<string[]>;

    /**
     * Create a FirewallSshSetting resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: FirewallSshSettingArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: FirewallSshSettingArgs | FirewallSshSettingState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as FirewallSshSettingState | undefined;
            resourceInputs["caname"] = state ? state.caname : undefined;
            resourceInputs["deviceName"] = state ? state.deviceName : undefined;
            resourceInputs["deviceVdom"] = state ? state.deviceVdom : undefined;
            resourceInputs["hostTrustedChecking"] = state ? state.hostTrustedChecking : undefined;
            resourceInputs["hostkeyDsa1024s"] = state ? state.hostkeyDsa1024s : undefined;
            resourceInputs["hostkeyEcdsa256s"] = state ? state.hostkeyEcdsa256s : undefined;
            resourceInputs["hostkeyEcdsa384s"] = state ? state.hostkeyEcdsa384s : undefined;
            resourceInputs["hostkeyEcdsa521s"] = state ? state.hostkeyEcdsa521s : undefined;
            resourceInputs["hostkeyEd25519s"] = state ? state.hostkeyEd25519s : undefined;
            resourceInputs["hostkeyRsa2048s"] = state ? state.hostkeyRsa2048s : undefined;
            resourceInputs["untrustedCanames"] = state ? state.untrustedCanames : undefined;
        } else {
            const args = argsOrState as FirewallSshSettingArgs | undefined;
            resourceInputs["caname"] = args ? args.caname : undefined;
            resourceInputs["deviceName"] = args ? args.deviceName : undefined;
            resourceInputs["deviceVdom"] = args ? args.deviceVdom : undefined;
            resourceInputs["hostTrustedChecking"] = args ? args.hostTrustedChecking : undefined;
            resourceInputs["hostkeyDsa1024s"] = args ? args.hostkeyDsa1024s : undefined;
            resourceInputs["hostkeyEcdsa256s"] = args ? args.hostkeyEcdsa256s : undefined;
            resourceInputs["hostkeyEcdsa384s"] = args ? args.hostkeyEcdsa384s : undefined;
            resourceInputs["hostkeyEcdsa521s"] = args ? args.hostkeyEcdsa521s : undefined;
            resourceInputs["hostkeyEd25519s"] = args ? args.hostkeyEd25519s : undefined;
            resourceInputs["hostkeyRsa2048s"] = args ? args.hostkeyRsa2048s : undefined;
            resourceInputs["untrustedCanames"] = args ? args.untrustedCanames : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(FirewallSshSetting.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering FirewallSshSetting resources.
 */
export interface FirewallSshSettingState {
    caname?: pulumi.Input<string>;
    deviceName?: pulumi.Input<string>;
    deviceVdom?: pulumi.Input<string>;
    hostTrustedChecking?: pulumi.Input<string>;
    hostkeyDsa1024s?: pulumi.Input<pulumi.Input<string>[]>;
    hostkeyEcdsa256s?: pulumi.Input<pulumi.Input<string>[]>;
    hostkeyEcdsa384s?: pulumi.Input<pulumi.Input<string>[]>;
    hostkeyEcdsa521s?: pulumi.Input<pulumi.Input<string>[]>;
    hostkeyEd25519s?: pulumi.Input<pulumi.Input<string>[]>;
    hostkeyRsa2048s?: pulumi.Input<pulumi.Input<string>[]>;
    untrustedCanames?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The set of arguments for constructing a FirewallSshSetting resource.
 */
export interface FirewallSshSettingArgs {
    caname?: pulumi.Input<string>;
    deviceName?: pulumi.Input<string>;
    deviceVdom?: pulumi.Input<string>;
    hostTrustedChecking?: pulumi.Input<string>;
    hostkeyDsa1024s?: pulumi.Input<pulumi.Input<string>[]>;
    hostkeyEcdsa256s?: pulumi.Input<pulumi.Input<string>[]>;
    hostkeyEcdsa384s?: pulumi.Input<pulumi.Input<string>[]>;
    hostkeyEcdsa521s?: pulumi.Input<pulumi.Input<string>[]>;
    hostkeyEd25519s?: pulumi.Input<pulumi.Input<string>[]>;
    hostkeyRsa2048s?: pulumi.Input<pulumi.Input<string>[]>;
    untrustedCanames?: pulumi.Input<pulumi.Input<string>[]>;
}
