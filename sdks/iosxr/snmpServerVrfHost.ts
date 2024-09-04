// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class SnmpServerVrfHost extends pulumi.CustomResource {
    /**
     * Get an existing SnmpServerVrfHost resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SnmpServerVrfHostState, opts?: pulumi.CustomResourceOptions): SnmpServerVrfHost {
        return new SnmpServerVrfHost(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'iosxr:index/snmpServerVrfHost:SnmpServerVrfHost';

    /**
     * Returns true if the given object is an instance of SnmpServerVrfHost.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SnmpServerVrfHost {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SnmpServerVrfHost.__pulumiType;
    }

    /**
     * Specify hosts to receive SNMP notifications
     */
    public readonly address!: pulumi.Output<string>;
    /**
     * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being
     * managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is.
     * Default value is `all`. - Choices: `all`, `attributes`
     */
    public readonly deleteMode!: pulumi.Output<string | undefined>;
    /**
     * A device name from the provider configuration.
     */
    public readonly device!: pulumi.Output<string | undefined>;
    /**
     * The UNENCRYPTED (cleartext) community string
     */
    public readonly unencryptedStrings!: pulumi.Output<outputs.SnmpServerVrfHostUnencryptedString[] | undefined>;
    /**
     * VRF name
     */
    public readonly vrfName!: pulumi.Output<string>;

    /**
     * Create a SnmpServerVrfHost resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SnmpServerVrfHostArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SnmpServerVrfHostArgs | SnmpServerVrfHostState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SnmpServerVrfHostState | undefined;
            resourceInputs["address"] = state ? state.address : undefined;
            resourceInputs["deleteMode"] = state ? state.deleteMode : undefined;
            resourceInputs["device"] = state ? state.device : undefined;
            resourceInputs["unencryptedStrings"] = state ? state.unencryptedStrings : undefined;
            resourceInputs["vrfName"] = state ? state.vrfName : undefined;
        } else {
            const args = argsOrState as SnmpServerVrfHostArgs | undefined;
            if ((!args || args.address === undefined) && !opts.urn) {
                throw new Error("Missing required property 'address'");
            }
            if ((!args || args.vrfName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'vrfName'");
            }
            resourceInputs["address"] = args ? args.address : undefined;
            resourceInputs["deleteMode"] = args ? args.deleteMode : undefined;
            resourceInputs["device"] = args ? args.device : undefined;
            resourceInputs["unencryptedStrings"] = args ? args.unencryptedStrings : undefined;
            resourceInputs["vrfName"] = args ? args.vrfName : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SnmpServerVrfHost.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SnmpServerVrfHost resources.
 */
export interface SnmpServerVrfHostState {
    /**
     * Specify hosts to receive SNMP notifications
     */
    address?: pulumi.Input<string>;
    /**
     * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being
     * managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is.
     * Default value is `all`. - Choices: `all`, `attributes`
     */
    deleteMode?: pulumi.Input<string>;
    /**
     * A device name from the provider configuration.
     */
    device?: pulumi.Input<string>;
    /**
     * The UNENCRYPTED (cleartext) community string
     */
    unencryptedStrings?: pulumi.Input<pulumi.Input<inputs.SnmpServerVrfHostUnencryptedString>[]>;
    /**
     * VRF name
     */
    vrfName?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SnmpServerVrfHost resource.
 */
export interface SnmpServerVrfHostArgs {
    /**
     * Specify hosts to receive SNMP notifications
     */
    address: pulumi.Input<string>;
    /**
     * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being
     * managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is.
     * Default value is `all`. - Choices: `all`, `attributes`
     */
    deleteMode?: pulumi.Input<string>;
    /**
     * A device name from the provider configuration.
     */
    device?: pulumi.Input<string>;
    /**
     * The UNENCRYPTED (cleartext) community string
     */
    unencryptedStrings?: pulumi.Input<pulumi.Input<inputs.SnmpServerVrfHostUnencryptedString>[]>;
    /**
     * VRF name
     */
    vrfName: pulumi.Input<string>;
}
