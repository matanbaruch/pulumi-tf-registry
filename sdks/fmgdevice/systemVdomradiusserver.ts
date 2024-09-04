// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class SystemVdomradiusserver extends pulumi.CustomResource {
    /**
     * Get an existing SystemVdomradiusserver resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SystemVdomradiusserverState, opts?: pulumi.CustomResourceOptions): SystemVdomradiusserver {
        return new SystemVdomradiusserver(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fmgdevice:index/systemVdomradiusserver:SystemVdomradiusserver';

    /**
     * Returns true if the given object is an instance of SystemVdomradiusserver.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SystemVdomradiusserver {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SystemVdomradiusserver.__pulumiType;
    }

    public readonly deviceName!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly radiusServerVdoms!: pulumi.Output<string[]>;
    public readonly status!: pulumi.Output<string>;

    /**
     * Create a SystemVdomradiusserver resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: SystemVdomradiusserverArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SystemVdomradiusserverArgs | SystemVdomradiusserverState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SystemVdomradiusserverState | undefined;
            resourceInputs["deviceName"] = state ? state.deviceName : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["radiusServerVdoms"] = state ? state.radiusServerVdoms : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
        } else {
            const args = argsOrState as SystemVdomradiusserverArgs | undefined;
            resourceInputs["deviceName"] = args ? args.deviceName : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["radiusServerVdoms"] = args ? args.radiusServerVdoms : undefined;
            resourceInputs["status"] = args ? args.status : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SystemVdomradiusserver.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SystemVdomradiusserver resources.
 */
export interface SystemVdomradiusserverState {
    deviceName?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    radiusServerVdoms?: pulumi.Input<pulumi.Input<string>[]>;
    status?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SystemVdomradiusserver resource.
 */
export interface SystemVdomradiusserverArgs {
    deviceName?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    radiusServerVdoms?: pulumi.Input<pulumi.Input<string>[]>;
    status?: pulumi.Input<string>;
}
