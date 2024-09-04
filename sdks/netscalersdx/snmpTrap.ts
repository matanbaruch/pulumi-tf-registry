// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class SnmpTrap extends pulumi.CustomResource {
    /**
     * Get an existing SnmpTrap resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SnmpTrapState, opts?: pulumi.CustomResourceOptions): SnmpTrap {
        return new SnmpTrap(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'netscalersdx:index/snmpTrap:SnmpTrap';

    /**
     * Returns true if the given object is an instance of SnmpTrap.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SnmpTrap {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SnmpTrap.__pulumiType;
    }

    /**
     * Community Name. Maximum length = 32
     */
    public readonly community!: pulumi.Output<string | undefined>;
    /**
     * Destination Port. Minimum value = 1 Maximum value =
     */
    public readonly destPort!: pulumi.Output<number | undefined>;
    /**
     * Trap Destination Server Address.
     */
    public readonly destServer!: pulumi.Output<string>;
    /**
     * Name of SNMP Trap User. Minimum length = 1 Maximum length = 32
     */
    public readonly userNames!: pulumi.Output<string[] | undefined>;
    /**
     * SNMP version. Maximum length = 2
     */
    public readonly version!: pulumi.Output<string | undefined>;

    /**
     * Create a SnmpTrap resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SnmpTrapArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SnmpTrapArgs | SnmpTrapState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SnmpTrapState | undefined;
            resourceInputs["community"] = state ? state.community : undefined;
            resourceInputs["destPort"] = state ? state.destPort : undefined;
            resourceInputs["destServer"] = state ? state.destServer : undefined;
            resourceInputs["userNames"] = state ? state.userNames : undefined;
            resourceInputs["version"] = state ? state.version : undefined;
        } else {
            const args = argsOrState as SnmpTrapArgs | undefined;
            if ((!args || args.destServer === undefined) && !opts.urn) {
                throw new Error("Missing required property 'destServer'");
            }
            resourceInputs["community"] = args ? args.community : undefined;
            resourceInputs["destPort"] = args ? args.destPort : undefined;
            resourceInputs["destServer"] = args ? args.destServer : undefined;
            resourceInputs["userNames"] = args ? args.userNames : undefined;
            resourceInputs["version"] = args ? args.version : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SnmpTrap.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SnmpTrap resources.
 */
export interface SnmpTrapState {
    /**
     * Community Name. Maximum length = 32
     */
    community?: pulumi.Input<string>;
    /**
     * Destination Port. Minimum value = 1 Maximum value =
     */
    destPort?: pulumi.Input<number>;
    /**
     * Trap Destination Server Address.
     */
    destServer?: pulumi.Input<string>;
    /**
     * Name of SNMP Trap User. Minimum length = 1 Maximum length = 32
     */
    userNames?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * SNMP version. Maximum length = 2
     */
    version?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SnmpTrap resource.
 */
export interface SnmpTrapArgs {
    /**
     * Community Name. Maximum length = 32
     */
    community?: pulumi.Input<string>;
    /**
     * Destination Port. Minimum value = 1 Maximum value =
     */
    destPort?: pulumi.Input<number>;
    /**
     * Trap Destination Server Address.
     */
    destServer: pulumi.Input<string>;
    /**
     * Name of SNMP Trap User. Minimum length = 1 Maximum length = 32
     */
    userNames?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * SNMP version. Maximum length = 2
     */
    version?: pulumi.Input<string>;
}
