// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ConnectorCertificates extends pulumi.CustomResource {
    /**
     * Get an existing ConnectorCertificates resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ConnectorCertificatesState, opts?: pulumi.CustomResourceOptions): ConnectorCertificates {
        return new ConnectorCertificates(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fivetran:index/connectorCertificates:ConnectorCertificates';

    /**
     * Returns true if the given object is an instance of ConnectorCertificates.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ConnectorCertificates {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ConnectorCertificates.__pulumiType;
    }

    public readonly certificates!: pulumi.Output<outputs.ConnectorCertificatesCertificate[] | undefined>;
    /**
     * The unique identifier for the target connection within the Fivetran system.
     */
    public readonly connectorId!: pulumi.Output<string>;

    /**
     * Create a ConnectorCertificates resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ConnectorCertificatesArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ConnectorCertificatesArgs | ConnectorCertificatesState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ConnectorCertificatesState | undefined;
            resourceInputs["certificates"] = state ? state.certificates : undefined;
            resourceInputs["connectorId"] = state ? state.connectorId : undefined;
        } else {
            const args = argsOrState as ConnectorCertificatesArgs | undefined;
            if ((!args || args.connectorId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'connectorId'");
            }
            resourceInputs["certificates"] = args ? args.certificates : undefined;
            resourceInputs["connectorId"] = args ? args.connectorId : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ConnectorCertificates.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ConnectorCertificates resources.
 */
export interface ConnectorCertificatesState {
    certificates?: pulumi.Input<pulumi.Input<inputs.ConnectorCertificatesCertificate>[]>;
    /**
     * The unique identifier for the target connection within the Fivetran system.
     */
    connectorId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ConnectorCertificates resource.
 */
export interface ConnectorCertificatesArgs {
    certificates?: pulumi.Input<pulumi.Input<inputs.ConnectorCertificatesCertificate>[]>;
    /**
     * The unique identifier for the target connection within the Fivetran system.
     */
    connectorId: pulumi.Input<string>;
}
