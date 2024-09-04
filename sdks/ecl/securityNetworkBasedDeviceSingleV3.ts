// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class SecurityNetworkBasedDeviceSingleV3 extends pulumi.CustomResource {
    /**
     * Get an existing SecurityNetworkBasedDeviceSingleV3 resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SecurityNetworkBasedDeviceSingleV3State, opts?: pulumi.CustomResourceOptions): SecurityNetworkBasedDeviceSingleV3 {
        return new SecurityNetworkBasedDeviceSingleV3(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'ecl:index/securityNetworkBasedDeviceSingleV3:SecurityNetworkBasedDeviceSingleV3';

    /**
     * Returns true if the given object is an instance of SecurityNetworkBasedDeviceSingleV3.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SecurityNetworkBasedDeviceSingleV3 {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SecurityNetworkBasedDeviceSingleV3.__pulumiType;
    }

    public readonly azGroup!: pulumi.Output<string>;
    public readonly licenseKind!: pulumi.Output<string>;
    public readonly locale!: pulumi.Output<string | undefined>;
    public readonly operatingMode!: pulumi.Output<string>;
    public readonly ports!: pulumi.Output<outputs.SecurityNetworkBasedDeviceSingleV3Port[] | undefined>;
    public readonly tenantId!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.SecurityNetworkBasedDeviceSingleV3Timeouts | undefined>;

    /**
     * Create a SecurityNetworkBasedDeviceSingleV3 resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SecurityNetworkBasedDeviceSingleV3Args, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SecurityNetworkBasedDeviceSingleV3Args | SecurityNetworkBasedDeviceSingleV3State, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SecurityNetworkBasedDeviceSingleV3State | undefined;
            resourceInputs["azGroup"] = state ? state.azGroup : undefined;
            resourceInputs["licenseKind"] = state ? state.licenseKind : undefined;
            resourceInputs["locale"] = state ? state.locale : undefined;
            resourceInputs["operatingMode"] = state ? state.operatingMode : undefined;
            resourceInputs["ports"] = state ? state.ports : undefined;
            resourceInputs["tenantId"] = state ? state.tenantId : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as SecurityNetworkBasedDeviceSingleV3Args | undefined;
            if ((!args || args.azGroup === undefined) && !opts.urn) {
                throw new Error("Missing required property 'azGroup'");
            }
            if ((!args || args.licenseKind === undefined) && !opts.urn) {
                throw new Error("Missing required property 'licenseKind'");
            }
            if ((!args || args.operatingMode === undefined) && !opts.urn) {
                throw new Error("Missing required property 'operatingMode'");
            }
            if ((!args || args.tenantId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'tenantId'");
            }
            resourceInputs["azGroup"] = args ? args.azGroup : undefined;
            resourceInputs["licenseKind"] = args ? args.licenseKind : undefined;
            resourceInputs["locale"] = args ? args.locale : undefined;
            resourceInputs["operatingMode"] = args ? args.operatingMode : undefined;
            resourceInputs["ports"] = args ? args.ports : undefined;
            resourceInputs["tenantId"] = args ? args.tenantId : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SecurityNetworkBasedDeviceSingleV3.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SecurityNetworkBasedDeviceSingleV3 resources.
 */
export interface SecurityNetworkBasedDeviceSingleV3State {
    azGroup?: pulumi.Input<string>;
    licenseKind?: pulumi.Input<string>;
    locale?: pulumi.Input<string>;
    operatingMode?: pulumi.Input<string>;
    ports?: pulumi.Input<pulumi.Input<inputs.SecurityNetworkBasedDeviceSingleV3Port>[]>;
    tenantId?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.SecurityNetworkBasedDeviceSingleV3Timeouts>;
}

/**
 * The set of arguments for constructing a SecurityNetworkBasedDeviceSingleV3 resource.
 */
export interface SecurityNetworkBasedDeviceSingleV3Args {
    azGroup: pulumi.Input<string>;
    licenseKind: pulumi.Input<string>;
    locale?: pulumi.Input<string>;
    operatingMode: pulumi.Input<string>;
    ports?: pulumi.Input<pulumi.Input<inputs.SecurityNetworkBasedDeviceSingleV3Port>[]>;
    tenantId: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.SecurityNetworkBasedDeviceSingleV3Timeouts>;
}
