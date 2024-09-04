// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class SystemFssopolling extends pulumi.CustomResource {
    /**
     * Get an existing SystemFssopolling resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SystemFssopollingState, opts?: pulumi.CustomResourceOptions): SystemFssopolling {
        return new SystemFssopolling(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fmgdevice:index/systemFssopolling:SystemFssopolling';

    /**
     * Returns true if the given object is an instance of SystemFssopolling.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SystemFssopolling {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SystemFssopolling.__pulumiType;
    }

    public readonly _guiMeta!: pulumi.Output<string | undefined>;
    public readonly authPasswords!: pulumi.Output<string[]>;
    public readonly authentication!: pulumi.Output<string>;
    public readonly deviceName!: pulumi.Output<string>;
    public readonly listeningPort!: pulumi.Output<number>;
    public readonly status!: pulumi.Output<string>;

    /**
     * Create a SystemFssopolling resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: SystemFssopollingArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SystemFssopollingArgs | SystemFssopollingState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SystemFssopollingState | undefined;
            resourceInputs["_guiMeta"] = state ? state._guiMeta : undefined;
            resourceInputs["authPasswords"] = state ? state.authPasswords : undefined;
            resourceInputs["authentication"] = state ? state.authentication : undefined;
            resourceInputs["deviceName"] = state ? state.deviceName : undefined;
            resourceInputs["listeningPort"] = state ? state.listeningPort : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
        } else {
            const args = argsOrState as SystemFssopollingArgs | undefined;
            resourceInputs["_guiMeta"] = args ? args._guiMeta : undefined;
            resourceInputs["authPasswords"] = args?.authPasswords ? pulumi.secret(args.authPasswords) : undefined;
            resourceInputs["authentication"] = args ? args.authentication : undefined;
            resourceInputs["deviceName"] = args ? args.deviceName : undefined;
            resourceInputs["listeningPort"] = args ? args.listeningPort : undefined;
            resourceInputs["status"] = args ? args.status : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["authPasswords"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(SystemFssopolling.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SystemFssopolling resources.
 */
export interface SystemFssopollingState {
    _guiMeta?: pulumi.Input<string>;
    authPasswords?: pulumi.Input<pulumi.Input<string>[]>;
    authentication?: pulumi.Input<string>;
    deviceName?: pulumi.Input<string>;
    listeningPort?: pulumi.Input<number>;
    status?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SystemFssopolling resource.
 */
export interface SystemFssopollingArgs {
    _guiMeta?: pulumi.Input<string>;
    authPasswords?: pulumi.Input<pulumi.Input<string>[]>;
    authentication?: pulumi.Input<string>;
    deviceName?: pulumi.Input<string>;
    listeningPort?: pulumi.Input<number>;
    status?: pulumi.Input<string>;
}
