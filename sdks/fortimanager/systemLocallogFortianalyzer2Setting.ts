// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class SystemLocallogFortianalyzer2Setting extends pulumi.CustomResource {
    /**
     * Get an existing SystemLocallogFortianalyzer2Setting resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SystemLocallogFortianalyzer2SettingState, opts?: pulumi.CustomResourceOptions): SystemLocallogFortianalyzer2Setting {
        return new SystemLocallogFortianalyzer2Setting(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortimanager:index/systemLocallogFortianalyzer2Setting:SystemLocallogFortianalyzer2Setting';

    /**
     * Returns true if the given object is an instance of SystemLocallogFortianalyzer2Setting.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SystemLocallogFortianalyzer2Setting {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SystemLocallogFortianalyzer2Setting.__pulumiType;
    }

    public readonly peerCertCn!: pulumi.Output<string | undefined>;
    public readonly reliable!: pulumi.Output<string>;
    public readonly secureConnection!: pulumi.Output<string>;
    public readonly server!: pulumi.Output<string | undefined>;
    public readonly severity!: pulumi.Output<string>;
    public readonly status!: pulumi.Output<string>;
    public readonly uploadTimes!: pulumi.Output<string[]>;

    /**
     * Create a SystemLocallogFortianalyzer2Setting resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: SystemLocallogFortianalyzer2SettingArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SystemLocallogFortianalyzer2SettingArgs | SystemLocallogFortianalyzer2SettingState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SystemLocallogFortianalyzer2SettingState | undefined;
            resourceInputs["peerCertCn"] = state ? state.peerCertCn : undefined;
            resourceInputs["reliable"] = state ? state.reliable : undefined;
            resourceInputs["secureConnection"] = state ? state.secureConnection : undefined;
            resourceInputs["server"] = state ? state.server : undefined;
            resourceInputs["severity"] = state ? state.severity : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["uploadTimes"] = state ? state.uploadTimes : undefined;
        } else {
            const args = argsOrState as SystemLocallogFortianalyzer2SettingArgs | undefined;
            resourceInputs["peerCertCn"] = args ? args.peerCertCn : undefined;
            resourceInputs["reliable"] = args ? args.reliable : undefined;
            resourceInputs["secureConnection"] = args ? args.secureConnection : undefined;
            resourceInputs["server"] = args ? args.server : undefined;
            resourceInputs["severity"] = args ? args.severity : undefined;
            resourceInputs["status"] = args ? args.status : undefined;
            resourceInputs["uploadTimes"] = args ? args.uploadTimes : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SystemLocallogFortianalyzer2Setting.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SystemLocallogFortianalyzer2Setting resources.
 */
export interface SystemLocallogFortianalyzer2SettingState {
    peerCertCn?: pulumi.Input<string>;
    reliable?: pulumi.Input<string>;
    secureConnection?: pulumi.Input<string>;
    server?: pulumi.Input<string>;
    severity?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
    uploadTimes?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The set of arguments for constructing a SystemLocallogFortianalyzer2Setting resource.
 */
export interface SystemLocallogFortianalyzer2SettingArgs {
    peerCertCn?: pulumi.Input<string>;
    reliable?: pulumi.Input<string>;
    secureConnection?: pulumi.Input<string>;
    server?: pulumi.Input<string>;
    severity?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
    uploadTimes?: pulumi.Input<pulumi.Input<string>[]>;
}
