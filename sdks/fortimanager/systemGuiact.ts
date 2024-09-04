// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class SystemGuiact extends pulumi.CustomResource {
    /**
     * Get an existing SystemGuiact resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SystemGuiactState, opts?: pulumi.CustomResourceOptions): SystemGuiact {
        return new SystemGuiact(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortimanager:index/systemGuiact:SystemGuiact';

    /**
     * Returns true if the given object is an instance of SystemGuiact.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SystemGuiact {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SystemGuiact.__pulumiType;
    }

    public readonly backupAll!: pulumi.Output<string | undefined>;
    public readonly backupConf!: pulumi.Output<string | undefined>;
    public readonly eventlogMsg!: pulumi.Output<string | undefined>;
    public readonly eventlogPath!: pulumi.Output<string | undefined>;
    public readonly reboot!: pulumi.Output<number | undefined>;
    public readonly reset2default!: pulumi.Output<number | undefined>;
    public readonly restoreAll!: pulumi.Output<string | undefined>;
    public readonly restoreConf!: pulumi.Output<string | undefined>;
    public readonly time!: pulumi.Output<string | undefined>;

    /**
     * Create a SystemGuiact resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: SystemGuiactArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SystemGuiactArgs | SystemGuiactState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SystemGuiactState | undefined;
            resourceInputs["backupAll"] = state ? state.backupAll : undefined;
            resourceInputs["backupConf"] = state ? state.backupConf : undefined;
            resourceInputs["eventlogMsg"] = state ? state.eventlogMsg : undefined;
            resourceInputs["eventlogPath"] = state ? state.eventlogPath : undefined;
            resourceInputs["reboot"] = state ? state.reboot : undefined;
            resourceInputs["reset2default"] = state ? state.reset2default : undefined;
            resourceInputs["restoreAll"] = state ? state.restoreAll : undefined;
            resourceInputs["restoreConf"] = state ? state.restoreConf : undefined;
            resourceInputs["time"] = state ? state.time : undefined;
        } else {
            const args = argsOrState as SystemGuiactArgs | undefined;
            resourceInputs["backupAll"] = args ? args.backupAll : undefined;
            resourceInputs["backupConf"] = args ? args.backupConf : undefined;
            resourceInputs["eventlogMsg"] = args ? args.eventlogMsg : undefined;
            resourceInputs["eventlogPath"] = args ? args.eventlogPath : undefined;
            resourceInputs["reboot"] = args ? args.reboot : undefined;
            resourceInputs["reset2default"] = args ? args.reset2default : undefined;
            resourceInputs["restoreAll"] = args ? args.restoreAll : undefined;
            resourceInputs["restoreConf"] = args ? args.restoreConf : undefined;
            resourceInputs["time"] = args ? args.time : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SystemGuiact.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SystemGuiact resources.
 */
export interface SystemGuiactState {
    backupAll?: pulumi.Input<string>;
    backupConf?: pulumi.Input<string>;
    eventlogMsg?: pulumi.Input<string>;
    eventlogPath?: pulumi.Input<string>;
    reboot?: pulumi.Input<number>;
    reset2default?: pulumi.Input<number>;
    restoreAll?: pulumi.Input<string>;
    restoreConf?: pulumi.Input<string>;
    time?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SystemGuiact resource.
 */
export interface SystemGuiactArgs {
    backupAll?: pulumi.Input<string>;
    backupConf?: pulumi.Input<string>;
    eventlogMsg?: pulumi.Input<string>;
    eventlogPath?: pulumi.Input<string>;
    reboot?: pulumi.Input<number>;
    reset2default?: pulumi.Input<number>;
    restoreAll?: pulumi.Input<string>;
    restoreConf?: pulumi.Input<string>;
    time?: pulumi.Input<string>;
}
