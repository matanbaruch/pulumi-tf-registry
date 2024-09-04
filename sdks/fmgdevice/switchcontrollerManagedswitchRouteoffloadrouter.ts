// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class SwitchcontrollerManagedswitchRouteoffloadrouter extends pulumi.CustomResource {
    /**
     * Get an existing SwitchcontrollerManagedswitchRouteoffloadrouter resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SwitchcontrollerManagedswitchRouteoffloadrouterState, opts?: pulumi.CustomResourceOptions): SwitchcontrollerManagedswitchRouteoffloadrouter {
        return new SwitchcontrollerManagedswitchRouteoffloadrouter(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fmgdevice:index/switchcontrollerManagedswitchRouteoffloadrouter:SwitchcontrollerManagedswitchRouteoffloadrouter';

    /**
     * Returns true if the given object is an instance of SwitchcontrollerManagedswitchRouteoffloadrouter.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SwitchcontrollerManagedswitchRouteoffloadrouter {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SwitchcontrollerManagedswitchRouteoffloadrouter.__pulumiType;
    }

    public readonly deviceName!: pulumi.Output<string>;
    public readonly deviceVdom!: pulumi.Output<string>;
    public readonly managedSwitch!: pulumi.Output<string>;
    public readonly routerIp!: pulumi.Output<string>;
    public readonly vlanName!: pulumi.Output<string | undefined>;

    /**
     * Create a SwitchcontrollerManagedswitchRouteoffloadrouter resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SwitchcontrollerManagedswitchRouteoffloadrouterArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SwitchcontrollerManagedswitchRouteoffloadrouterArgs | SwitchcontrollerManagedswitchRouteoffloadrouterState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SwitchcontrollerManagedswitchRouteoffloadrouterState | undefined;
            resourceInputs["deviceName"] = state ? state.deviceName : undefined;
            resourceInputs["deviceVdom"] = state ? state.deviceVdom : undefined;
            resourceInputs["managedSwitch"] = state ? state.managedSwitch : undefined;
            resourceInputs["routerIp"] = state ? state.routerIp : undefined;
            resourceInputs["vlanName"] = state ? state.vlanName : undefined;
        } else {
            const args = argsOrState as SwitchcontrollerManagedswitchRouteoffloadrouterArgs | undefined;
            if ((!args || args.managedSwitch === undefined) && !opts.urn) {
                throw new Error("Missing required property 'managedSwitch'");
            }
            resourceInputs["deviceName"] = args ? args.deviceName : undefined;
            resourceInputs["deviceVdom"] = args ? args.deviceVdom : undefined;
            resourceInputs["managedSwitch"] = args ? args.managedSwitch : undefined;
            resourceInputs["routerIp"] = args ? args.routerIp : undefined;
            resourceInputs["vlanName"] = args ? args.vlanName : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SwitchcontrollerManagedswitchRouteoffloadrouter.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SwitchcontrollerManagedswitchRouteoffloadrouter resources.
 */
export interface SwitchcontrollerManagedswitchRouteoffloadrouterState {
    deviceName?: pulumi.Input<string>;
    deviceVdom?: pulumi.Input<string>;
    managedSwitch?: pulumi.Input<string>;
    routerIp?: pulumi.Input<string>;
    vlanName?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SwitchcontrollerManagedswitchRouteoffloadrouter resource.
 */
export interface SwitchcontrollerManagedswitchRouteoffloadrouterArgs {
    deviceName?: pulumi.Input<string>;
    deviceVdom?: pulumi.Input<string>;
    managedSwitch: pulumi.Input<string>;
    routerIp?: pulumi.Input<string>;
    vlanName?: pulumi.Input<string>;
}
