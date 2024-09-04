// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class TeoCertificateConfig extends pulumi.CustomResource {
    /**
     * Get an existing TeoCertificateConfig resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: TeoCertificateConfigState, opts?: pulumi.CustomResourceOptions): TeoCertificateConfig {
        return new TeoCertificateConfig(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'tencentcloud:index/teoCertificateConfig:TeoCertificateConfig';

    /**
     * Returns true if the given object is an instance of TeoCertificateConfig.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is TeoCertificateConfig {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === TeoCertificateConfig.__pulumiType;
    }

    /**
     * Acceleration domain name that needs to modify the certificate configuration.
     */
    public readonly host!: pulumi.Output<string>;
    /**
     * Mode of configuring the certificate, the values are: `disable`: Do not configure the certificate; `eofreecert`:
     * Configure EdgeOne free certificate; `sslcert`: Configure SSL certificate. If not filled in, the default value is
     * `disable`.
     */
    public readonly mode!: pulumi.Output<string>;
    /**
     * SSL certificate configuration, this parameter takes effect only when mode = sslcert, just enter the corresponding
     * CertId. You can go to the SSL certificate list to view the CertId.
     */
    public readonly serverCertInfos!: pulumi.Output<outputs.TeoCertificateConfigServerCertInfo[] | undefined>;
    /**
     * Site ID.
     */
    public readonly zoneId!: pulumi.Output<string>;

    /**
     * Create a TeoCertificateConfig resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TeoCertificateConfigArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: TeoCertificateConfigArgs | TeoCertificateConfigState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as TeoCertificateConfigState | undefined;
            resourceInputs["host"] = state ? state.host : undefined;
            resourceInputs["mode"] = state ? state.mode : undefined;
            resourceInputs["serverCertInfos"] = state ? state.serverCertInfos : undefined;
            resourceInputs["zoneId"] = state ? state.zoneId : undefined;
        } else {
            const args = argsOrState as TeoCertificateConfigArgs | undefined;
            if ((!args || args.host === undefined) && !opts.urn) {
                throw new Error("Missing required property 'host'");
            }
            if ((!args || args.zoneId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'zoneId'");
            }
            resourceInputs["host"] = args ? args.host : undefined;
            resourceInputs["mode"] = args ? args.mode : undefined;
            resourceInputs["serverCertInfos"] = args ? args.serverCertInfos : undefined;
            resourceInputs["zoneId"] = args ? args.zoneId : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(TeoCertificateConfig.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering TeoCertificateConfig resources.
 */
export interface TeoCertificateConfigState {
    /**
     * Acceleration domain name that needs to modify the certificate configuration.
     */
    host?: pulumi.Input<string>;
    /**
     * Mode of configuring the certificate, the values are: `disable`: Do not configure the certificate; `eofreecert`:
     * Configure EdgeOne free certificate; `sslcert`: Configure SSL certificate. If not filled in, the default value is
     * `disable`.
     */
    mode?: pulumi.Input<string>;
    /**
     * SSL certificate configuration, this parameter takes effect only when mode = sslcert, just enter the corresponding
     * CertId. You can go to the SSL certificate list to view the CertId.
     */
    serverCertInfos?: pulumi.Input<pulumi.Input<inputs.TeoCertificateConfigServerCertInfo>[]>;
    /**
     * Site ID.
     */
    zoneId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a TeoCertificateConfig resource.
 */
export interface TeoCertificateConfigArgs {
    /**
     * Acceleration domain name that needs to modify the certificate configuration.
     */
    host: pulumi.Input<string>;
    /**
     * Mode of configuring the certificate, the values are: `disable`: Do not configure the certificate; `eofreecert`:
     * Configure EdgeOne free certificate; `sslcert`: Configure SSL certificate. If not filled in, the default value is
     * `disable`.
     */
    mode?: pulumi.Input<string>;
    /**
     * SSL certificate configuration, this parameter takes effect only when mode = sslcert, just enter the corresponding
     * CertId. You can go to the SSL certificate list to view the CertId.
     */
    serverCertInfos?: pulumi.Input<pulumi.Input<inputs.TeoCertificateConfigServerCertInfo>[]>;
    /**
     * Site ID.
     */
    zoneId: pulumi.Input<string>;
}
