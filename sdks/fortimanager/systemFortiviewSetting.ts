// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class SystemFortiviewSetting extends pulumi.CustomResource {
    /**
     * Get an existing SystemFortiviewSetting resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SystemFortiviewSettingState, opts?: pulumi.CustomResourceOptions): SystemFortiviewSetting {
        return new SystemFortiviewSetting(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortimanager:index/systemFortiviewSetting:SystemFortiviewSetting';

    /**
     * Returns true if the given object is an instance of SystemFortiviewSetting.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SystemFortiviewSetting {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SystemFortiviewSetting.__pulumiType;
    }

    public readonly dataSource!: pulumi.Output<string>;
    public readonly notScannedApps!: pulumi.Output<string>;
    public readonly resolveIp!: pulumi.Output<string>;

    /**
     * Create a SystemFortiviewSetting resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: SystemFortiviewSettingArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SystemFortiviewSettingArgs | SystemFortiviewSettingState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SystemFortiviewSettingState | undefined;
            resourceInputs["dataSource"] = state ? state.dataSource : undefined;
            resourceInputs["notScannedApps"] = state ? state.notScannedApps : undefined;
            resourceInputs["resolveIp"] = state ? state.resolveIp : undefined;
        } else {
            const args = argsOrState as SystemFortiviewSettingArgs | undefined;
            resourceInputs["dataSource"] = args ? args.dataSource : undefined;
            resourceInputs["notScannedApps"] = args ? args.notScannedApps : undefined;
            resourceInputs["resolveIp"] = args ? args.resolveIp : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SystemFortiviewSetting.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SystemFortiviewSetting resources.
 */
export interface SystemFortiviewSettingState {
    dataSource?: pulumi.Input<string>;
    notScannedApps?: pulumi.Input<string>;
    resolveIp?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SystemFortiviewSetting resource.
 */
export interface SystemFortiviewSettingArgs {
    dataSource?: pulumi.Input<string>;
    notScannedApps?: pulumi.Input<string>;
    resolveIp?: pulumi.Input<string>;
}
